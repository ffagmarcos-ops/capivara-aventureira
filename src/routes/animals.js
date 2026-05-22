const { Router } = require('express');
const { requireAuth } = require('../middleware/auth');
const { AnimalEntry } = require('../models');

const router = Router();
const BASE64_IMAGE_MAX_CHARS = 5 * 1024 * 1024;

function normalizeBase64Image(value) {
  if (value === undefined || value === null || value === '') {
    return null;
  }

  if (typeof value !== 'string') {
    return null;
  }

  const trimmed = value.trim();
  if (!trimmed.startsWith('data:image/')) {
    return null;
  }

  if (!trimmed.includes(';base64,')) {
    return null;
  }

  if (trimmed.length > BASE64_IMAGE_MAX_CHARS) {
    return null;
  }

  return trimmed;
}

router.get('/animals', requireAuth, async (req, res, next) => {
  try {
    const rows = await AnimalEntry.findAll({
      where: { userId: req.user.id },
      order: [['capturedAt', 'DESC'], ['id', 'DESC']]
    });
    return res.json(rows);
  } catch (error) {
    return next(error);
  }
});

router.post('/animals', requireAuth, async (req, res, next) => {
  try {
    const { animalName, category, location, notes, photoBase64, photoUrl, premiumUnlocked, capturedAt } = req.body;
    if (!animalName) {
      return res.status(400).json({ error: 'animalName e obrigatorio' });
    }

    const normalizedPhoto = normalizeBase64Image(photoBase64 || photoUrl);
    if ((photoBase64 || photoUrl) && !normalizedPhoto) {
      return res.status(400).json({ error: 'Imagem invalida. Envie data URL em base64 de image/*' });
    }

    const created = await AnimalEntry.create({
      userId: req.user.id,
      animalName,
      category,
      location,
      notes,
      photoBase64: normalizedPhoto,
      premiumUnlocked: Boolean(premiumUnlocked),
      capturedAt: capturedAt ? new Date(capturedAt) : new Date()
    });

    return res.status(201).json(created);
  } catch (error) {
    return next(error);
  }
});

router.put('/animals/:id', requireAuth, async (req, res, next) => {
  try {
    const row = await AnimalEntry.findOne({
      where: {
        id: Number(req.params.id),
        userId: req.user.id
      }
    });

    if (!row) {
      return res.status(404).json({ error: 'Registro nao encontrado' });
    }

    const allowedFields = ['animalName', 'category', 'location', 'notes', 'premiumUnlocked', 'capturedAt'];
    for (const key of allowedFields) {
      if (Object.prototype.hasOwnProperty.call(req.body, key)) {
        row[key] = req.body[key];
      }
    }

    if (Object.prototype.hasOwnProperty.call(req.body, 'photoBase64') || Object.prototype.hasOwnProperty.call(req.body, 'photoUrl')) {
      const normalizedPhoto = normalizeBase64Image(req.body.photoBase64 || req.body.photoUrl);
      if ((req.body.photoBase64 || req.body.photoUrl) && !normalizedPhoto) {
        return res.status(400).json({ error: 'Imagem invalida. Envie data URL em base64 de image/*' });
      }
      row.photoBase64 = normalizedPhoto;
    }

    await row.save();

    return res.json(row);
  } catch (error) {
    return next(error);
  }
});

router.delete('/animals/:id', requireAuth, async (req, res, next) => {
  try {
    const removed = await AnimalEntry.destroy({
      where: {
        id: Number(req.params.id),
        userId: req.user.id
      }
    });

    if (!removed) {
      return res.status(404).json({ error: 'Registro nao encontrado' });
    }

    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
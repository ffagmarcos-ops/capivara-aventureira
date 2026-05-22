const { Router } = require('express');
const { requireAuth } = require('../middleware/auth');
const { Accessory, UserAccessory, UserGameState, sequelize } = require('../models');

const router = Router();

async function findAccessoryByParam(rawParam, transaction) {
  const numeric = Number(rawParam);
  if (!Number.isNaN(numeric)) {
    const byId = await Accessory.findByPk(numeric, { transaction });
    if (byId) {
      return byId;
    }
  }

  return Accessory.findOne({ where: { code: rawParam }, transaction });
}

router.get('/accessories', requireAuth, async (req, res, next) => {
  try {
    const accessories = await Accessory.findAll({ order: [['price', 'ASC']] });
    const ownedRows = await UserAccessory.findAll({ where: { userId: req.user.id } });

    const ownedMap = new Map();
    for (const row of ownedRows) {
      ownedMap.set(row.accessoryId, { owned: true, equipped: row.equipped });
    }

    const data = accessories.map((item) => {
      const userState = ownedMap.get(item.id) || { owned: false, equipped: false };
      return {
        ...item.toJSON(),
        ...userState
      };
    });

    return res.json(data);
  } catch (error) {
    return next(error);
  }
});

router.post('/accessories/:id/purchase', requireAuth, async (req, res, next) => {
  const tx = await sequelize.transaction();
  try {
    const accessory = await findAccessoryByParam(req.params.id, tx);
    if (!accessory) {
      await tx.rollback();
      return res.status(404).json({ error: 'Acessorio nao encontrado' });
    }

    const [state] = await UserGameState.findOrCreate({
      where: { userId: req.user.id },
      defaults: {
        guardianXP: 0,
        seedCoins: 0,
        currentStreak: 0,
        userLevelMemo: 1,
        cameraAccepted: false
      },
      transaction: tx
    });

    if (state.seedCoins < accessory.price) {
      await tx.rollback();
      return res.status(400).json({ error: 'Sementes insuficientes' });
    }

    state.seedCoins -= accessory.price;
    await state.save({ transaction: tx });

    const [record] = await UserAccessory.findOrCreate({
      where: { userId: req.user.id, accessoryId: accessory.id },
      defaults: { equipped: false },
      transaction: tx
    });

    await tx.commit();
    return res.status(201).json({
      accessoryId: accessory.id,
      code: accessory.code,
      owned: true,
      equipped: record.equipped,
      seedCoins: state.seedCoins
    });
  } catch (error) {
    await tx.rollback();
    return next(error);
  }
});

router.post('/accessories/:id/equip', requireAuth, async (req, res, next) => {
  const tx = await sequelize.transaction();
  try {
    const accessory = await findAccessoryByParam(req.params.id, tx);
    if (!accessory) {
      await tx.rollback();
      return res.status(404).json({ error: 'Acessorio nao encontrado' });
    }

    const owned = await UserAccessory.findOne({
      where: { userId: req.user.id, accessoryId: accessory.id },
      transaction: tx
    });
    if (!owned) {
      await tx.rollback();
      return res.status(400).json({ error: 'Compre o acessorio antes de equipar' });
    }

    const slotAccessories = await Accessory.findAll({
      where: { slot: accessory.slot },
      attributes: ['id'],
      transaction: tx
    });

    const slotAccessoryIds = slotAccessories.map((row) => row.id);
    if (slotAccessoryIds.length > 0) {
      await UserAccessory.update(
        { equipped: false },
        {
          where: { userId: req.user.id, accessoryId: slotAccessoryIds },
          transaction: tx
        }
      );
    }

    owned.equipped = true;
    await owned.save({ transaction: tx });

    await tx.commit();
    return res.json({ accessoryId: accessory.id, code: accessory.code, equipped: true, slot: accessory.slot });
  } catch (error) {
    await tx.rollback();
    return next(error);
  }
});

router.post('/accessories/unequip/:slot', requireAuth, async (req, res, next) => {
  const tx = await sequelize.transaction();
  try {
    const { slot } = req.params;
    if (!['head', 'eyes', 'body', 'hand', 'feet'].includes(slot)) {
      await tx.rollback();
      return res.status(400).json({ error: 'Slot invalido' });
    }

    const slotAccessories = await Accessory.findAll({
      where: { slot },
      attributes: ['id'],
      transaction: tx
    });

    const slotAccessoryIds = slotAccessories.map((row) => row.id);
    if (slotAccessoryIds.length > 0) {
      await UserAccessory.update(
        { equipped: false },
        {
          where: { userId: req.user.id, accessoryId: slotAccessoryIds },
          transaction: tx
        }
      );
    }

    await tx.commit();
    return res.json({ slot, equipped: false });
  } catch (error) {
    await tx.rollback();
    return next(error);
  }
});

router.post('/accessories/unequip-all', requireAuth, async (req, res, next) => {
  try {
    await UserAccessory.update(
      { equipped: false },
      {
        where: { userId: req.user.id }
      }
    );
    return res.json({ ok: true });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
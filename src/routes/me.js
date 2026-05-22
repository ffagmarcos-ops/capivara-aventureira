const { Router } = require('express');
const { fn, col } = require('sequelize');
const { requireAuth } = require('../middleware/auth');
const { AnimalEntry, UserGameState } = require('../models');

const router = Router();

async function getOrCreateGameState(userId) {
  const [state] = await UserGameState.findOrCreate({
    where: { userId },
    defaults: {
      guardianXP: 0,
      seedCoins: 0,
      currentStreak: 0,
      lastVisitDate: null,
      quizDoneDate: null,
      userLevelMemo: 1,
      activeMissions: null,
      cameraAccepted: false
    }
  });
  return state;
}

router.get('/me', requireAuth, async (req, res, next) => {
  try {
    const categoryRows = await AnimalEntry.findAll({
      attributes: ['category', [fn('COUNT', col('id')), 'count']],
      where: { userId: req.user.id },
      group: ['category'],
      raw: true
    });

    const categories = {};
    for (const row of categoryRows) {
      categories[row.category || 'desconhecido'] = Number(row.count);
    }

    return res.json({
      user: {
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        avatar: req.user.avatar,
        role: req.user.role
      },
      stats: {
        animalsByCategory: categories
      }
    });
  } catch (error) {
    return next(error);
  }
});

router.get('/me/state', requireAuth, async (req, res, next) => {
  try {
    const state = await getOrCreateGameState(req.user.id);
    return res.json({
      guardianXP: state.guardianXP,
      seedCoins: state.seedCoins,
      currentStreak: state.currentStreak,
      lastVisitDate: state.lastVisitDate,
      quizDoneDate: state.quizDoneDate,
      userLevelMemo: state.userLevelMemo,
      activeMissions: state.activeMissions,
      cameraAccepted: state.cameraAccepted
    });
  } catch (error) {
    return next(error);
  }
});

router.put('/me/state', requireAuth, async (req, res, next) => {
  try {
    const state = await getOrCreateGameState(req.user.id);

    const fields = [
      'guardianXP',
      'seedCoins',
      'currentStreak',
      'lastVisitDate',
      'quizDoneDate',
      'userLevelMemo',
      'activeMissions',
      'cameraAccepted'
    ];

    for (const field of fields) {
      if (Object.prototype.hasOwnProperty.call(req.body, field)) {
        state[field] = req.body[field];
      }
    }

    if (Number.isNaN(Number(state.guardianXP)) || Number(state.guardianXP) < 0) {
      return res.status(400).json({ error: 'guardianXP invalido' });
    }
    if (Number.isNaN(Number(state.seedCoins)) || Number(state.seedCoins) < 0) {
      return res.status(400).json({ error: 'seedCoins invalido' });
    }

    await state.save();

    return res.json({
      guardianXP: state.guardianXP,
      seedCoins: state.seedCoins,
      currentStreak: state.currentStreak,
      lastVisitDate: state.lastVisitDate,
      quizDoneDate: state.quizDoneDate,
      userLevelMemo: state.userLevelMemo,
      activeMissions: state.activeMissions,
      cameraAccepted: state.cameraAccepted
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
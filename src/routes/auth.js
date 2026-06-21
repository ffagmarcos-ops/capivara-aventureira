const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const { User } = require('../models');
const env = require('../config/env');

const router = Router();

function signToken(userId) {
  return jwt.sign({ sub: userId }, env.jwtSecret, {
    expiresIn: env.jwtExpiresIn
  });
}

router.post('/auth/register', async (req, res, next) => {
  try {
    const { name, email, password, avatar } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'name, email e password sao obrigatorios' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'password deve ter no minimo 6 caracteres' });
    }

    const existing = await User.findOne({ where: { email: { [Op.eq]: email.toLowerCase() } } });
    if (existing) {
      return res.status(409).json({ error: 'Email ja cadastrado' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      passwordHash,
      avatar: avatar || '🦫'
    });

    return res.status(201).json({
      token: signToken(user.id),
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar
      }
    });
  } catch (error) {
    return next(error);
  }
});

router.post('/auth/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'email e password sao obrigatorios' });
    }

    const user = await User.findOne({ where: { email: email.toLowerCase() } });
    if (!user) {
      return res.status(401).json({ error: 'Credenciais invalidas' });
    }

    const validPassword = await bcrypt.compare(password, user.passwordHash);
    if (!validPassword) {
      return res.status(401).json({ error: 'Credenciais invalidas' });
    }

    return res.json({
      token: signToken(user.id),
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        role: user.role  // necessário para verificação de admin no painel
      }
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
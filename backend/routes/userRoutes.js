const express = require('express');
const router = express.Router();
const { User } = require('../models');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');

// Obtenir tous les utilisateurs (Admin uniquement)
router.get('/', authMiddleware, isAdmin, async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Erreur lors de la récupération des utilisateurs.' });
  }
});

// Créer un utilisateur
router.post('/', async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const newUser = await User.create({ name, email, password, role });
    res.status(201).json(newUser);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Erreur lors de la création de l’utilisateur.' });
  }
});

module.exports = router;

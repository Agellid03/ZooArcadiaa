const express = require('express');
const router = express.Router();
const { Animal } = require('../models');

// Obtenir tous les animaux
router.get('/', async (req, res) => {
  try {
    const animals = await Animal.findAll();
    res.status(200).json(animals);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Erreur lors de la récupération des animaux.' });
  }
});

module.exports = router;

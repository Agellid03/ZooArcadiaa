const { Animal } = require('../models');

// Créer un nouvel animal
exports.createAnimal = async (req, res) => {
  try {
    const { name, species, habitat, age } = req.body;
    const animal = await Animal.create({ name, species, habitat, age });
    res.status(201).json(animal);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Erreur lors de la création de l'animal", error: err });
  }
};

// Obtenir tous les animaux
exports.getAnimals = async (req, res) => {
  const animals = await Animal.findAll();
  res.json(animals);
};

// Obtenir un animal par ID
exports.getAnimalById = async (req, res) => {
  const animal = await Animal.findByPk(req.params.id);
  if (!animal) {
    return res.status(404).json({ message: 'Animal non trouvé' });
  }
  res.json(animal);
};

const { Service } = require('../models');

// Créer un nouveau service
exports.createService = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const service = await Service.create({ name, description, price });
    res.status(201).json(service);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erreur lors de la création du service', error: err });
  }
};

// Obtenir tous les services
exports.getServices = async (req, res) => {
  const services = await Service.findAll();
  res.json(services);
};

const { Report } = require('../models');

// Créer un rapport vétérinaire
exports.createReport = async (req, res) => {
  try {
    const { animalId, vetId, reportText } = req.body;
    const report = await Report.create({ animalId, vetId, reportText });
    res.status(201).json(report);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erreur lors de la création du rapport', error: err });
  }
};

// Obtenir tous les rapports vétérinaires
exports.getReports = async (req, res) => {
  const reports = await Report.findAll();
  res.json(reports);
};

module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define(
    'Report',
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, // Utilisation de la date actuelle par défaut
      },
    },
    {},
  );

  // Associations avec d'autres modèles
  Report.belongsTo(sequelize.models.User, { foreignKey: 'vetId' });
  Report.belongsTo(sequelize.models.Animal, { foreignKey: 'animalId' });

  return Report;
};

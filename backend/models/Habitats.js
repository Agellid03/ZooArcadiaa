module.exports = (sequelize, DataTypes) => {
  const Habitat = sequelize.define(
    'Habitat',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {},
  );

  // Associations avec d'autres modèles
  Habitat.hasMany(sequelize.models.Animal, { foreignKey: 'habitatId' });

  return Habitat;
};

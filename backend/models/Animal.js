module.exports = (sequelize, DataTypes) => {
  const Animal = sequelize.define(
    'Animal',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      habitatId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Habitats',
          key: 'id',
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    },
    {},
  );

  // Associations avec d'autres modèles
  Animal.belongsTo(sequelize.models.Habitat, { foreignKey: 'habitatId' });
  Animal.belongsTo(sequelize.models.User, { foreignKey: 'userId' });
  Animal.belongsTo(sequelize.models.User, { foreignKey: 'vetId' });

  return Animal;
};

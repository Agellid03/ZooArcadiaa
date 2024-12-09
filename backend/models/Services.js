module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define(
    'Service',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {},
  );

  // Associations avec d'autres modèles
  Service.belongsTo(sequelize.models.User, { foreignKey: 'userId' }); // Un service peut être associé à un employé (admin ou employé)

  return Service;
};

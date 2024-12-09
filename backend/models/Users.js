const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM('admin', 'employee', 'vet'),
        allowNull: false,
        defaultValue: 'employee',
      },
    },
    {},
  );

  // Hachage du mot de passe avant l'enregistrement
  User.beforeCreate(async (user) => {
    if (user.password) {
      user.password = await bcrypt.hash(user.password, 10); // Hachage avec un sel de 10 tours
    }
  });

  // Associations avec les autres modèles
  User.hasMany(sequelize.models.Animal, { foreignKey: 'userId' });
  User.hasMany(sequelize.models.Report, { foreignKey: 'vetId' });

  return User;
};

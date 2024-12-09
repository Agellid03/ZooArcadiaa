const { Sequelize } = require('sequelize');

// Connexion à la base de données
const sequelize = new Sequelize('zoo_management', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connexion à la base de données réussie.');
  })
  .catch((err) => {
    console.error('Impossible de se connecter à la base de données:', err);
  });

module.exports = sequelize;

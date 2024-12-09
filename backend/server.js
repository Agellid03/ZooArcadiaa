const { Sequelize } = require('sequelize');
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import des routes et du middleware
const userRoutes = require('./routes/userRoutes');
const animalRoutes = require('./routes/animalRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const reportRoutes = require('./routes/reportRoutes');
const authenticateToken = require('./middlewares/authMiddleware');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Test de la route principale
app.get('/', (req, res) => {
  res.send('Backend en ligne');
});

// Initialisation de Sequelize avec les variables d'environnement
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
);

// Synchronisation avec la base de données
sequelize
  .sync()
  .then(() => {
    console.log('Tables synchronisées avec succès');
  })
  .catch((err) => {
    console.error('Erreur de synchronisation :', err);
  });

// Utilisation des routes API
app.use('/api/users', userRoutes);
app.use('/api/animals', animalRoutes);
app.use('/api/services', authenticateToken, serviceRoutes);
app.use('/api/reports', authenticateToken, reportRoutes);

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

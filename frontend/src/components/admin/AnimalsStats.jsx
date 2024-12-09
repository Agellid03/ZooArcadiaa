// src/components/AnimalsStats.jsx
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2'; // Importation de Bar pour un graphique à barres
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import "../../styles/animalStats.css"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AnimalsStats = () => {
  const [animalStats, setAnimalStats] = useState([]);

  useEffect(() => {
    // Ici, récupérer les données depuis l'API ou Firebase
    const fetchData = async () => {
      const data = [
        { name: 'Lion', consultations: 20 },
        { name: 'Elephant', consultations: 15 },
        { name: 'Tiger', consultations: 10 },
        { name: 'Giraffe', consultations: 8 },
        
      ];
      setAnimalStats(data);
    };

    fetchData();
  }, []);

  // Préparation des données pour le graphique
  const data = {
    labels: animalStats.map((animal) => animal.name), // Noms des animaux
    datasets: [
      {
        label: 'Nombre de consultations',
        data: animalStats.map((animal) => animal.consultations),
        backgroundColor: 'rgba(54, 162, 235, 0.6)', 
        borderColor: 'rgba(54, 162, 235, 1)', 
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="animals-stats">
      <h2>Statistiques des animaux</h2>
      <div className="chart-container">
        <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default AnimalsStats;

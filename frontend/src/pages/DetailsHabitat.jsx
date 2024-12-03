import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/detailsHabitat.css";

const DetailHabitat = () => {
  const { name } = useParams();
  const [habitat, setHabitat] = useState(null);

  useEffect(() => {
    const fetchHabitat = () => {
      // Données d'exemple statiques
      const habitatData = [
        {
          name: "Savane",
          imageUrl: "/images/Savane2.jpeg",  // Utilisation d'un chemin relatif vers 'public'
          description: "La savane est un habitat vaste et ouvert.",
        },
        {
          name: "Forêt",
          imageUrl: "/images/Foret.jpeg",
          description: "La forêt est un habitat riche en biodiversité.",
        },
        {
          name: "Volière",
          imageUrl: "/images/Voliere.jpeg",
          description: "La volière abrite de nombreux oiseaux exotiques.",
        },
        {
          name: "Aquarium",
          imageUrl: "/images/Aquarium.jpeg",
          description: "L'aquarium présente une grande variété d'espèces aquatiques.",
        },
      ];

      // Trouver l'habitat correspondant au nom dans l'URL
      const habitatFound = habitatData.find((habitat) => habitat.name.toLowerCase() === name.toLowerCase());

      // Mise à jour de l'état avec les données de l'habitat trouvé
      setHabitat(habitatFound);
    };

    fetchHabitat();
  }, [name]);

  // Vérification pour éviter d'accéder à des propriétés sur un objet null
  if (!habitat) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail_habitat">
      <h2>{habitat.name}</h2>
      <img src={habitat.imageUrl} alt={habitat.name} className="habitat-image" />
      <p>{habitat.description}</p>
    </div>
  );
};

export default DetailHabitat;

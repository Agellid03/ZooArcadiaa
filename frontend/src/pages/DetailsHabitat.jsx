import React from "react";
import { useParams } from "react-router-dom";
import "../styles/detailsHabitat.css";

// Données statiques (déplacées en dehors du composant)
const habitatData = [
  {
    name: "Savane",
    imageUrl: "/images/Savane2.jpeg",
    description: "La savane est un habitat vaste et ouvert.",
  },
  {
    name: "Foret",
    imageUrl: "/images/Foret.jpeg",
    description: "La forêt est un habitat riche en biodiversité.",
  },
  {
    name: "Voliere",
    imageUrl: "/images/Voliere.jpeg",
    description: "La volière abrite de nombreux oiseaux exotiques.",
  },
  {
    name: "Aquarium",
    imageUrl: "/images/Aquarium.jpeg",
    description: "L'aquarium présente une grande variété d'espèces aquatiques.",
  },
  {
    name: "Ferme",
    imageUrl: "/images/Ferme.jpeg",
    description: "Un environnement ferme dans un zoo est une reconstitution d’un espace rural qui permet aux visiteurs de découvrir la vie à la campagne et de se rapprocher des animaux domestiques. Cet habitat est souvent conçu pour rappeler une ferme traditionnelle avec une ambiance conviviale et éducative.",
  },
  {
    name: "Jungle",
    imageUrl: "/images/Jungle.jpeg",
    description: "Un environnement jungle dans un zoo recrée l’atmosphère dense et exotique des forêts tropicales. Il immerge les visiteurs dans un cadre luxuriant et humide, entouré d’une végétation abondante et de sons naturels.",
  },
  {
    name: "Desert",
    imageUrl: "/images/Desert.jpeg",
    description: "Un environnement désert dans un zoo recrée les vastes étendues arides des déserts du monde, offrant aux visiteurs un aperçu des écosystèmes extrêmes où la vie s'adapte à des conditions difficiles.",
  },
  {
    name: "Montagne",
    imageUrl: "/images/Montagne.jpeg",
    description: "Un environnement montagne dans un zoo reproduit les paysages alpins ou rocheux, permettant de découvrir la faune et la flore des altitudes élevées. Il offre une ambiance sauvage et paisible, idéale pour observer des espèces adaptées aux climats froids et aux terrains escarpés.",
  },
  
];

const DetailsHabitat = () => {
  const { name } = useParams();

  // Trouver directement l'habitat correspondant
  const habitat = habitatData.find(
    (habitat) => habitat.name.toLowerCase() === name.toLowerCase()
  );

  // Si l'habitat n'existe pas, afficher un message d'erreur
  if (!habitat) {
    return <div>Habitat non trouvé</div>;
  }

  return (
    <div className="detail_habitat">
      <h2>{habitat.name}</h2>
      <img
        src={habitat.imageUrl}
        alt={habitat.name}
        className="habitat-image"
      />
      <p>{habitat.description}</p>
    </div>
  );
};

export default DetailsHabitat;

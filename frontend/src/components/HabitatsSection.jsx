import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, Col, Container, Row } from "reactstrap"; // Import des composants Bootstrap pour structurer les cartes
import "../styles/habitatsSection.css"; // Import du fichier de style dédié

// Composant HabitatSection pour afficher les différents habitats disponibles dans le zoo
const HabitatSection = () => {
  // Liste des habitats avec leur nom et le chemin de leur image
  const habitats = [
    { name: "Savane", imageUrl: "./images/Savane2.jpeg" },
    { name: "Forêt", imageUrl: "./images/Foret.jpeg" },
    { name: "Volière", imageUrl: "./images/Voliere.jpeg" },
    { name: "Aquarium", imageUrl: "./images/Aquarium.jpeg" },
  ];

  return (
    <Container fluid className="habitats_section py-5">
      {/* Affichage de chaque habitat dans une disposition responsive */}
      <Row>
        {habitats.map((habitat, index) => (
          <Col key={index} md="3" sm="6" className="mb-4">
            {/* Lien vers la page spécifique d'un habitat en utilisant son nom */}
            <Link
              to={`/habitats/${habitat.name.toLowerCase()}`} // Création de liens dynamiques
              className="habitat-link"
              aria-label={`Découvrir l'habitat ${habitat.name}`}
            >
              {/* Carte affichant l'image et le nom de l'habitat */}
              <Card className="h-100 habitat-card">
                <CardImg
                  top
                  width="100%"
                  src={habitat.imageUrl}
                  alt={habitat.name} // Texte alternatif pour l'accessibilité
                  className="habitat-card-img"
                />
                <CardTitle tag="h5" className="habitat-card-title">
                  {habitat.name}
                </CardTitle>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HabitatSection;

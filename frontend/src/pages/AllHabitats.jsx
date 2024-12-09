import React from "react";
import { Card, CardImg, CardTitle, Col, Container, Row } from "reactstrap";
import BigTitle from "../components/BigTitle"; // Composant pour le titre avec image
import "../styles/allHabitats.css"; // CSS pour styliser cette page
import "../styles/bigTitle.css"; // CSS pour le composant BigTitle

const AllHabitats = () => {
  // Données statiques des habitats
  const habitats = [
    {
      name: "Savane",
      imageUrl: "./images/Savane.jpeg", // Chemin vers l'image locale
      link: "/habitats/savane", // Lien vers la page de détails
    },
    {
      name: "Forêt",
      imageUrl: "./images/Foret.jpeg",
      link: "/habitats/foret",
    },
    {
      name: "Volière",
      imageUrl: "./images/Voliere.jpeg",
      link: "/habitats/voliere",
    },
    {
      name: "Aquarium",
      imageUrl: "./images/Aquarium.jpeg",
      link: "/habitats/aquarium",
    },
    {
      name: "Ferme",
      imageUrl: "./images/Ferme.jpeg",
      link: "/habitats/ferme",
    },
    {
      name: "Jungle",
      imageUrl: "./images/Jungle.jpeg",
      link: "/habitats/jungle",
    },
    {
      name: "Désert",
      imageUrl: "./images/Desert.jpeg",
      link: "/habitats/desert",
    },
    {
      name: "Montagne",
      imageUrl: "./images/Montagne.jpeg",
      link: "/habitats/montagne",
    },
  ];

  return (
    <>
      {/* Section de titre */}
      <BigTitle
        title="Retrouvez tous nos habitats"
        imageUrl="./images/PandaRoux.jpeg" // Image d'en-tête
      />

      {/* Liste des habitats */}
      <Container fluid className="all_habitats_page py-5">
        <Row>
          {habitats.map((habitat, index) => (
            <Col key={index} md="3" sm="6" className="mb-4">
              <a
                href={habitat.link} // Lien vers la page de l'habitat
                className="habitat_link"
                aria-label={`En savoir plus sur l'habitat : ${habitat.name}`}
              >
                <Card className="h-100 habitat_card">
                  {/* Image de l'habitat */}
                  <CardImg
                    top
                    width="100%"
                    src={habitat.imageUrl} // URL de l'image
                    alt={`Image de l'habitat : ${habitat.name}`}
                    className="habitat_card_img"
                  />
                  {/* Nom de l'habitat */}
                  <CardTitle className="habitat_card_title">
                    {habitat.name}
                  </CardTitle>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllHabitats;

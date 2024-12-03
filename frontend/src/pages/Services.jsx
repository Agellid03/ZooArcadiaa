import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import BigTitle from "../components/BigTitle"; // Composant pour le titre avec image
import "../styles/services.css"; // CSS pour styliser cette page
import "../styles/bigTitle.css"; // CSS pour le composant BigTitle

const AllServices = () => {
  // Données des services
  const services = [
    {
      name: "Restauration",
      description: "Des restaurants variés pour toutes les envies et bio",
      icon: "🍽️", // Icône représentant le service
      link: "/restauration", // Lien vers la page détaillant ce service
    },
    { name: "Guide", description: "Avec guide", icon: "📖", link: "/guide" },
    {
      name: "Souvenirs",
      description: "Boutiques de souvenirs pour tous les âges",
      icon: "🎁",
      link: "/souvenirs",
    },
    {
      name: "Visite en petit train",
      description:
        "Une visite à travers l'ensemble du parc en petit train pour profiter de l'endroit avec toute la famille",
      icon: "🚂",
      link: "/visite",
    },
    {
      name: "Découverte de la ferme",
      description:
        "En immersion dans notre ferme pour être au plus proche des animaux et connaître un peu plus le métier de nos soignants",
      icon: "🐄",
      link: "/visiteFerme",
    },
    {
      name: "Dégustation",
      description:
        "Une dégustation de nos produits bio fabriqués dans la belle région de Brocéliande",
      icon: "🍷",
      link: "/degustation",
    },
  ];

  return (
    <>
      {/* Section de titre avec image d'en-tête */}
      <BigTitle
        title="Les services que nous vous proposons !"
        imageUrl="./images/PandaRoux.jpeg"
      />

      {/* Conteneur pour afficher tous les services */}
      <Container fluid className="all_services_page py-5">
        <Row>
          {services.map((service, index) => (
            <Col key={index} md="4" sm="6" className="mb-4">
              <Link
                to={service.link} // Lien vers la page du service
                className="service_link"
                aria-label={`En savoir plus sur le service : ${service.name}`}
              >
                {/* Carte représentant le service */}
                <Card className="h-100 service_card">
                  <CardBody className="d-flex flex-column align-items-center">
                    {/* Icône représentant le service */}
                    <div className="service_icon">{service.icon}</div>
                    {/* Titre du service */}
                    <CardTitle tag="h5" className="text-center service_card_title">
                      {service.name}
                    </CardTitle>
                    {/* Description du service */}
                    <CardText className="text-center service_card_text">
                      {service.description}
                    </CardText>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllServices;

import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import { NavLink } from "react-router-dom";  // Utilisation de NavLink pour React Router
import "../styles/servicesSection.css";

const ServicesSection = () => {
  const services = [
    {
      name: "Restauration",
      description: "Des restaurants variés pour toutes les envies et bio!",
      icon: "🍽️",
      link: "/restauration",
    },
    { name: "Guide", description: "Avec guide", icon: "📖", link: "/guide" },
    {
      name: "Souvenirs",
      description: "Boutiques de souvenirs pour tous les âges",
      icon: "🎁",
      link: "/souvenirs",
    },
  ];

  return (
    <Container fluid className="services_section py-5">
      <Row>
        {services.map((service, index) => (
          <Col key={index} md="4" sm="6" className="mb-4">
            <NavLink to={service.link} className="service-link" aria-label={`Aller à ${service.name}`}>
              <Card className="h-100 service-card">
                <CardBody className="d-flex flex-column align-items-center">
                  <div className="service-icon">{service.icon}</div>
                  <CardTitle tag="h5" className="text-center service-card-title">
                    {service.name}
                  </CardTitle>
                  <CardText className="text-center service-card-text">
                    {service.description}
                  </CardText>
                </CardBody>
              </Card>
            </NavLink>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesSection;

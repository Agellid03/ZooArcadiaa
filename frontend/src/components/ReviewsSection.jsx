import React from "react";
import { Card, CardBody, CardText, Col, Container, Row } from "reactstrap";
import "../styles/reviewsSection.css";

const ReviewsSection = () => {
  // Tableau contenant les avis des visiteurs
  const reviews = [
    { author: "Alice", text: "Un lieu magnifique pour toute la famille !" },
    { author: "Bob", text: "Les enfants ont adoré les animaux et les jeux." },
    { author: "Charlie", text: "Une journée inoubliable, à refaire !" },
  ];

  return (
    <Container fluid className="reviews_section py-5">
      {/* Titre de la section */}
      <h2 className="text-center mb-4">Avis des Visiteurs</h2>
      <Row>
        {reviews.map((review, index) => (
          // Utilisation de Reactstrap pour créer des colonnes responsives
          <Col key={index} md="4" sm="6" className="mb-4">
            {/* Carte affichant un avis */}
            <Card className="h-100 review-card">
              <CardBody>
                <CardText className="review-text">"{review.text}"</CardText>
                {/* Auteur de l'avis affiché en bas à droite */}
                <div className="text-right review-author">
                  <small>- {review.author}</small>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ReviewsSection;

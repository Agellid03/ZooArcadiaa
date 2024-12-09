import React from "react"; // Importation de React pour créer le composant
import { Col, Container, Row } from "reactstrap"; // Composants Bootstrap pour structurer la mise en page
import "../footer/footer.css"; // Importation du fichier CSS spécifique au footer

/**
 * Composant Footer
 * Ce composant représente le bas de page du site avec des informations utiles :
 * - Horaires d'ouverture
 * - Adresse et coordonnées de contact
 */
const Footer = () => {
  return (
    <footer className="footer"> 
      <Container> 
        <Row> 
          <Col xs="12" md="6">
            <h5>Nos horaires</h5> {/* Titre de la section */}
            <p>
              Du Lundi au Vendredi :<br />
              10:00-19:00 {/* Heures d'ouverture en semaine */}
            </p>
            <p>
              Le samedi :<br />
              10:00-17:30 {/* Heures d'ouverture le samedi */}
            </p>
          </Col>

          {/* Colonne : Coordonnées de contact */}
          <Col xs="12" md="6"> {/* Deuxième colonne avec l'adresse et les contacts */}
            <h5>Zoo D’Arcadia</h5> {/* Titre de la section */}
            <p>
              5 rue de la vieille mer<br />
              37150 Brocéliande
            </p>
            {/* Lien cliquable pour le numéro de téléphone */}
            <p>
              <a href="tel:0401010101" className="footer-link">
                04 01 01 01 01
              </a>
            </p>
            {/* Lien cliquable pour l'adresse email */}
            <p>
              <a href="mailto:contact@zoodarcadia.com" className="footer-link">
                contact@zoodarcadia.com
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; // Exportation du composant pour l'utiliser dans d'autres parties du site

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import "../header/navbar.css"

const ClientNavbar = () => {
  // État pour gérer l'ouverture/fermeture du menu burger
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="container_navbar" expand="md">
      {/* Nom de la marque avec redirection vers la page d'accueil */}
      <NavbarBrand className="nav-brand" tag={NavLink} to="/">
        Zoo D'Arcadia
      </NavbarBrand>
      
      {/* Bouton pour ouvrir/fermer le menu sur petits écrans */}
      <NavbarToggler
        className="navbar-toggler"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={toggle}
      />
      
      {/* Menu de navigation */}
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/" activeclassname="active">
              Accueil
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/services" activeclassname="active">
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/habitats" activeclassname="active">
              Habitats
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/contact" activeclassname="active">
              Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/login" activeclassname="active">
              Connexion
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/admin/*" activeclassname="active">
              Admin
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default ClientNavbar;

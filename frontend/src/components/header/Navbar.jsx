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
// import "../header/clientNavbar.css";

const ClientNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="container_navbar" expand="md">
      <NavbarBrand className="nav-brand" tag={NavLink} to="/">
        Zoo D'Arcadia
      </NavbarBrand>
      <NavbarToggler aria-label="Toggle navigation" onClick={toggle} />
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
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default ClientNavbar;

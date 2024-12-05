import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  Container, Form, FormGroup, Input, Label } from "reactstrap";
import "../styles/login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Gestion des changements de champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Validation et simulation de connexion
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = credentials;

    // Simulation de validation des identifiants
    if (email === "admin@zoo.com" && password === "admin123") {
      navigate("/admin");
    } else if (email === "employee@zoo.com" && password === "employee123") {
      navigate("/employee"); 
    } else if (email === "vet@zoo.com" && password === "vet123") {
      navigate("/vet");
    } else {
      setError("Identifiants incorrects. Veuillez réessayer.");
    }
  };

  return (
    <Container className="login-page">
      <Form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Connexion</h2>
        {error && <p className="error-message">{error}</p>}
        <FormGroup>
          <Label for="email">Adresse Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Votre email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Mot de Passe</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Votre mot de passe"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <button type="submit" className="login-button">
          Se connecter
        </button>
      </Form>
    </Container>
  );
};

export default Login;

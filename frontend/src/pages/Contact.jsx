
import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    email: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, email } = formData;

    if (!title || !description || !email) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Affichage des données dans la console (remplacez par EmailJS ou une API plus tard)
    console.log("Données envoyées :", formData);

    setSuccessMessage("Votre message a été envoyé avec succès !");
    setFormData({ title: "", description: "", email: "" }); // Réinitialiser le formulaire
  };

  return (
    <Container className="contact_page py-5">
      <h2 className="text-center mb-4">Contactez-nous</h2>
      <Form onSubmit={handleSubmit} className="contact_form">
        <FormGroup>
          <Label for="title">Titre</Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Entrez le sujet"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            placeholder="Entrez votre message"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Entrez votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button type="submit" color="primary" className="mt-3">
          Envoyer
        </Button>
        {successMessage && <p className="mt-3 text-success">{successMessage}</p>}
      </Form>
    </Container>
  );
};

export default Contact;

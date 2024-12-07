import React, { useState } from "react";
import { Table, Button, Form, Card } from "react-bootstrap";

const ManageZooEntities = () => {
  const [services, setServices] = useState([
    { id: 1, name: "Restauration", description: "Un espace pour déjeuner au zoo." },
    { id: 2, name: "Visites guidées", description: "Des guides pour découvrir le zoo." },
    { id: 3, name: "Petit train", description: "Un train pour se déplacer dans le zoo." },
  ]);

  const handleDelete = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newService = {
      id: services.length + 1,
      name: e.target.name.value,
      description: e.target.description.value,
    };
    setServices([...services, newService]);
    e.target.reset();
  };

  return (
    <div className="manage-zoo-entities">
      <h2>Gestion des Services</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.name}</td>
              <td>{service.description}</td>
              <td>
                <Button
                  variant="warning"
                  className="m-1"
                  onClick={() => alert(`Modifier le service ${service.name}`)}
                >
                  Modifier
                </Button>
                <Button
                  variant="danger"
                  className="m-1"
                  onClick={() => handleDelete(service.id)}
                >
                  Supprimer
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>


 {/* Ajout d'un nouveau service */}
 <h3 className="mt-4">Ajouter un nouveau service</h3>
<div className="add-service-container">
  <Card className="add-service-card">
    <Card.Header as="h5" className="text-center bg-primary text-white">
      Nouveau Service
    </Card.Header>
    <Card.Body>
      <Form onSubmit={handleAdd} className="add-service-form">
        <Form.Group className="mb-3" controlId="formServiceName">
          <Form.Label>Nom du Service</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Ex : Visite guidée"
            required
            className="form-input"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formServiceDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            placeholder="Décrivez le service ici"
            rows={3}
            required
            className="form-input"
          />
        </Form.Group>
        <div className="text-center">
          <Button
            variant="success"
            type="submit"
            className="btn-add-service"
          >
            <i className="fa fa-plus-circle me-2"></i>Ajouter le service
          </Button>
        </div>
      </Form>
    </Card.Body>
  </Card>
</div>

    </div>
  );
};

export default ManageZooEntities;

import React, { useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';

const ManageHabitats = () => {
  // Mock des données initiales
  const [habitats, setHabitats] = useState([
    { id: 1, name: 'Savane', description: 'Un habitat pour les lions et les éléphants.' },
    { id: 2, name: 'Jungle', description: 'Un habitat dense pour les tigres et les singes.' },
    { id: 3, name: 'Arctique', description: 'Un espace frais pour les ours polaires.' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newHabitat, setNewHabitat] = useState({ name: '', description: '' });
  const [editHabitat, setEditHabitat] = useState(null);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setNewHabitat({ name: '', description: '' });
    setEditHabitat(null);
  };

  const handleAddHabitat = () => {
    if (editHabitat) {
      // Modifier un habitat existant
      setHabitats(
        habitats.map((habitat) =>
          habitat.id === editHabitat.id ? { ...editHabitat, ...newHabitat } : habitat
        )
      );
    } else {
      // Ajouter un nouvel habitat
      const newId = habitats.length > 0 ? habitats[habitats.length - 1].id + 1 : 1;
      setHabitats([...habitats, { id: newId, ...newHabitat }]);
    }

    handleCloseModal();
  };

  const handleEditHabitat = (habitat) => {
    setEditHabitat(habitat);
    setNewHabitat({ name: habitat.name, description: habitat.description });
    setShowModal(true);
  };

  const handleDeleteHabitat = (id) => {
    setHabitats(habitats.filter((habitat) => habitat.id !== id));
  };

  return (
    <div>
      <h2>Gestion des Habitats</h2>
      <Button variant="primary" onClick={handleShowModal}>
        Ajouter un Habitat
      </Button>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {habitats.map((habitat) => (
            <tr key={habitat.id}>
              <td>{habitat.name}</td>
              <td>{habitat.description}</td>
              <td>
                <Button variant="warning" onClick={() => handleEditHabitat(habitat)}>
                  Modifier
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteHabitat(habitat.id)}
                  className="ml-2"
                >
                  Supprimer
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal pour ajouter / modifier un habitat */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editHabitat ? 'Modifier l\'Habitat' : 'Ajouter un Habitat'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formHabitatName">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nom de l'habitat"
                value={newHabitat.name}
                onChange={(e) => setNewHabitat({ ...newHabitat, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formHabitatDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description de l'habitat"
                value={newHabitat.description}
                onChange={(e) =>
                  setNewHabitat({ ...newHabitat, description: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleAddHabitat}>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManageHabitats;

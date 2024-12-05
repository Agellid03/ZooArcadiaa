import React, { useState } from "react";
import { Modal, Button, Table, Form } from "react-bootstrap";

const ManageAccounts = () => {
  // Simuler les données des utilisateurs
  const [users, setUsers] = useState([
    { id: 1, email: "employe1@example.com", role: "Employé" },
    { id: 2, email: "vet1@example.com", role: "Vétérinaire" },
  ]);

  // État pour le formulaire d'ajout/modification
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ email: "", role: "Employé" });
  const [editMode, setEditMode] = useState(false);
  const [editUserId, setEditUserId] = useState(null);

  // Gérer l'ouverture/fermeture du modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ email: "", role: "Employé" });
    setEditMode(false);
  };

  // Gérer le formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Ajouter ou modifier un utilisateur
  const handleSubmit = () => {
    if (editMode) {
      // Modification
      setUsers((prev) =>
        prev.map((user) =>
          user.id === editUserId ? { ...user, ...formData } : user
        )
      );
    } else {
      // Ajout
      const newUser = {
        id: Date.now(),
        ...formData,
      };
      setUsers((prev) => [...prev, newUser]);
    }
    handleCloseModal();
  };

  // Supprimer un utilisateur
  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  // Préparer la modification
  const handleEdit = (user) => {
    setFormData({ email: user.email, role: user.role });
    setEditMode(true);
    setEditUserId(user.id);
    setShowModal(true);
  };

  return (
    <div className="manage-accounts">
      <h2>Gestion des comptes</h2>
      <Button variant="primary" onClick={handleShowModal}>
        Ajouter un utilisateur
      </Button>

      {/* Tableau des utilisateurs */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Rôle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(user)}>
                  Modifier
                </Button>{" "}
                <Button variant="danger" onClick={() => handleDelete(user.id)}>
                  Supprimer
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal pour ajouter/modifier un utilisateur */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editMode ? "Modifier" : "Ajouter"} un utilisateur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Rôle</Form.Label>
              <Form.Control
                as="select"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option>Employé</option>
                <option>Vétérinaire</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {editMode ? "Modifier" : "Ajouter"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManageAccounts;

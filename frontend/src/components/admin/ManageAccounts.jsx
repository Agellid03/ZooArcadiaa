import React, { useState } from "react";
import { Modal, Button, Table, Form, Container } from "react-bootstrap";
import "../../styles/manageAccounts.css";

const ManageAccounts = () => {
  const [users, setUsers] = useState([
    { id: 1, email: "employe1@example.com", role: "Employé" },
    { id: 2, email: "vet1@example.com", role: "Vétérinaire" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ email: "", role: "Employé" });
  const [editMode, setEditMode] = useState(false);
  const [editUserId, setEditUserId] = useState(null);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ email: "", role: "Employé" });
    setEditMode(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editMode) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === editUserId ? { ...user, ...formData } : user
        )
      );
    } else {
      const newUser = {
        id: Date.now(),
        ...formData,
      };
      setUsers((prev) => [...prev, newUser]);
    }
    handleCloseModal();
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const handleEdit = (user) => {
    setFormData({ email: user.email, role: user.role });
    setEditMode(true);
    setEditUserId(user.id);
    setShowModal(true);
  };

  return (
    <Container fluid className="manage-accounts">
      <h2 className="title">Gestion des comptes</h2>
      <div className="actions">
        <Button variant="primary" onClick={handleShowModal}>
          Ajouter un utilisateur
        </Button>
      </div>

      <Table striped bordered hover responsive="sm" className="users-table">
  <thead>
    <tr>
      <th className="column-id">ID</th>
      <th className="column-email">Email</th>
      <th className="column-role">Rôle</th>
      <th className="column-actions">Actions</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user) => (
      <tr key={user.id}>
        <td className="column-id">{user.id}</td>
        <td className="column-email">{user.email}</td>
        <td className="column-role">{user.role}</td>
        <td className="column-actions">
          <Button
            variant="warning"
            size="sm"
            className="action-btn"
            onClick={() => handleEdit(user)}
          >
            Modifier
          </Button>{" "}
          <Button
            variant="danger"
            size="sm"
            className="action-btn"
            onClick={() => handleDelete(user.id)}
          >
            Supprimer
          </Button>
        </td>
      </tr>
    ))}
  </tbody>
</Table>


      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editMode ? "Modifier" : "Ajouter"} un utilisateur
          </Modal.Title>
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
    </Container>
  );
};

export default ManageAccounts;

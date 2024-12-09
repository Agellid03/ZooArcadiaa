import React, { useState } from 'react';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import '../../styles/employeDashboard.css';

const EmployeeDashboard = () => {
  // Mock des avis
  const [reviews, setReviews] = useState([
    { id: 1, visitor: 'Alice', comment: 'Super expérience au zoo!', status: 'En attente' },
    { id: 2, visitor: 'Bob', comment: 'Les animaux sont magnifiques.', status: 'En attente' },
  ]);

  // Mock de l'historique d'alimentation
  const [feedingHistory, setFeedingHistory] = useState([
    { id: 1, animal: 'Lion', food: 'Viande', quantity: '2kg', date: '2024-12-06', time: '14:00' },
    { id: 2, animal: 'Éléphant', food: 'Herbe', quantity: '10kg', date: '2024-12-06', time: '12:00' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newFeeding, setNewFeeding] = useState({
    animal: '',
    food: '',
    quantity: '',
    date: '',
    time: '',
  });

  // Valider ou invalider un avis
  const handleReviewAction = (id, action) => {
    setReviews(
      reviews.map((review) =>
        review.id === id ? { ...review, status: action === 'valider' ? 'Validé' : 'Rejeté' } : review
      )
    );
  };

  // Ajouter une nouvelle entrée dans l'historique
  const handleAddFeeding = () => {
    const newId = feedingHistory.length > 0 ? feedingHistory[feedingHistory.length - 1].id + 1 : 1;
    setFeedingHistory([...feedingHistory, { id: newId, ...newFeeding }]);
    setShowModal(false);
    setNewFeeding({ animal: '', food: '', quantity: '', date: '', time: '' });
  };

  return (
    <div>
      <h2>Dashboard Employé</h2>

      {/* Gestion des avis */}
      <h3 className="mt-4">Avis des Visiteurs</h3>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Visiteur</th>
            <th>Commentaire</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td>{review.visitor}</td>
              <td>{review.comment}</td>
              <td>{review.status}</td>
              <td>
                {review.status === 'En attente' && (
                  <>
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => handleReviewAction(review.id, 'valider')}
                      className="mr-2"
                    >
                      Valider
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleReviewAction(review.id, 'rejeter')}
                    >
                      Rejeter
                    </Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Gestion de l'alimentation */}
      <h3 className="mt-4">Historique d'Alimentation</h3>
      <Button variant="primary" onClick={() => setShowModal(true)} className="mb-3">
        Ajouter une Entrée
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Animal</th>
            <th>Nourriture</th>
            <th>Quantité</th>
            <th>Date</th>
            <th>Heure</th>
          </tr>
        </thead>
        <tbody>
          {feedingHistory.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.animal}</td>
              <td>{entry.food}</td>
              <td>{entry.quantity}</td>
              <td>{entry.date}</td>
              <td>{entry.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal pour ajouter une nouvelle entrée d'alimentation */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une Entrée d'Alimentation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="animal">
              <Form.Label>Animal</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nom de l'animal"
                value={newFeeding.animal}
                onChange={(e) => setNewFeeding({ ...newFeeding, animal: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="food">
              <Form.Label>Nourriture</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type de nourriture"
                value={newFeeding.food}
                onChange={(e) => setNewFeeding({ ...newFeeding, food: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="quantity">
              <Form.Label>Quantité</Form.Label>
              <Form.Control
                type="text"
                placeholder="Quantité (ex : 2kg)"
                value={newFeeding.quantity}
                onChange={(e) => setNewFeeding({ ...newFeeding, quantity: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={newFeeding.date}
                onChange={(e) => setNewFeeding({ ...newFeeding, date: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="time">
              <Form.Label>Heure</Form.Label>
              <Form.Control
                type="time"
                value={newFeeding.time}
                onChange={(e) => setNewFeeding({ ...newFeeding, time: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleAddFeeding}>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EmployeeDashboard;

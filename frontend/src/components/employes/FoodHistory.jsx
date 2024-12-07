import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import "../../styles/foodHistory.css";

const FoodHistory = () => {
  // Mock des données de l'historique alimentaire
  const [foodHistory, setFoodHistory] = useState([
    { id: 1, animal: "Lion", food: "Viande", quantity: "5kg", date: "2024-12-06", time: "10:00" },
    { id: 2, animal: "Girafe", food: "Feuilles", quantity: "8kg", date: "2024-12-06", time: "11:30" },
  ]);

  // État pour gérer les données du formulaire d'ajout
  const [newRecord, setNewRecord] = useState({
    animal: "",
    food: "",
    quantity: "",
    date: "",
    time: "",
  });

  // Gestion des champs du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecord({ ...newRecord, [name]: value });
  };

  // Ajout d'un nouvel enregistrement alimentaire
  const addFoodRecord = () => {
    if (
      newRecord.animal &&
      newRecord.food &&
      newRecord.quantity &&
      newRecord.date &&
      newRecord.time
    ) {
      setFoodHistory([
        ...foodHistory,
        { ...newRecord, id: foodHistory.length + 1 },
      ]);
      setNewRecord({ animal: "", food: "", quantity: "", date: "", time: "" });
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  };

  return (
    <div className="food-history">
      <h2>Historique Alimentaire</h2>
      <p>Gérez les données alimentaires des animaux.</p>

      {/* Formulaire d'ajout */}
      <div className="food-form">
        <h3>Ajouter un enregistrement alimentaire</h3>
        <Form>
          <Form.Group>
            <Form.Label>Animal</Form.Label>
            <Form.Control
              type="text"
              name="animal"
              placeholder="Nom de l'animal"
              value={newRecord.animal}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Type de nourriture</Form.Label>
            <Form.Control
              type="text"
              name="food"
              placeholder="Exemple : Viande, Feuilles..."
              value={newRecord.food}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Quantité</Form.Label>
            <Form.Control
              type="text"
              name="quantity"
              placeholder="Exemple : 5kg, 2kg..."
              value={newRecord.quantity}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={newRecord.date}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Heure</Form.Label>
            <Form.Control
              type="time"
              name="time"
              value={newRecord.time}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="primary" className="mt-3" onClick={addFoodRecord}>
            Ajouter
          </Button>
        </Form>
      </div>

      {/* Liste des enregistrements */}
      <div className="food-list">
        <h3>Historique des enregistrements</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Animal</th>
              <th>Type de Nourriture</th>
              <th>Quantité</th>
              <th>Date</th>
              <th>Heure</th>
            </tr>
          </thead>
          <tbody>
            {foodHistory.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.animal}</td>
                <td>{record.food}</td>
                <td>{record.quantity}</td>
                <td>{record.date}</td>
                <td>{record.time}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default FoodHistory;

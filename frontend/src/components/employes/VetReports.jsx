import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import "../../styles/vetReports.css";

const VetReports = () => {
  // État pour gérer les données des comptes rendus
  const [reports, setReports] = useState([
    { id: 1, type: "Animal", name: "Lion", content: "Observation quotidienne : RAS", date: "2024-12-01" },
    { id: 2, type: "Habitat", name: "Enclos des girafes", content: "Problème d'humidité signalé.", date: "2024-12-03" },
  ]);

  // État pour le formulaire de création de compte rendu
  const [newReport, setNewReport] = useState({
    type: "",
    name: "",
    content: "",
    date: "",
  });

  // Gestion des champs du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReport({ ...newReport, [name]: value });
  };

  // Ajout d'un nouveau compte rendu
  const addReport = () => {
    if (newReport.type && newReport.name && newReport.content && newReport.date) {
      setReports([...reports, { ...newReport, id: reports.length + 1 }]);
      setNewReport({ type: "", name: "", content: "", date: "" });
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  };

  // Suppression d'un compte rendu
  const deleteReport = (id) => {
    setReports(reports.filter((report) => report.id !== id));
  };

  return (
    <div className="vet-reports">
      <h2>Gestion des Comptes Rendus</h2>
      <p>Ajoutez, consultez ou modifiez les comptes rendus des animaux ou habitats.</p>

      {/* Formulaire d'ajout */}
      <div className="report-form">
        <h3>Ajouter un nouveau compte rendu</h3>
        <Form>
          <Form.Group>
            <Form.Label>Type</Form.Label>
            <Form.Control
              as="select"
              name="type"
              value={newReport.type}
              onChange={handleInputChange}
            >
              <option value="">Sélectionner</option>
              <option value="Animal">Animal</option>
              <option value="Habitat">Habitat</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Exemple : Lion ou Enclos des girafes"
              value={newReport.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Contenu</Form.Label>
            <Form.Control
              as="textarea"
              name="content"
              placeholder="Décrire le compte rendu ici"
              value={newReport.content}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={newReport.date}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="success" className="mt-3" onClick={addReport}>
            Ajouter
          </Button>
        </Form>
      </div>

      {/* Liste des comptes rendus */}
      <div className="report-list">
        <h3>Liste des comptes rendus</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Nom</th>
              <th>Contenu</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td>{report.id}</td>
                <td>{report.type}</td>
                <td>{report.name}</td>
                <td>{report.content}</td>
                <td>{report.date}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteReport(report.id)}
                  >
                    Supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default VetReports;

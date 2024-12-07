import React, { useState } from "react";
import { Form, Button, Table, Card } from "react-bootstrap";
import "../../styles/veterinaryReports.css"

const VetReportsList = () => {
  // Données fictives pour les rapports
  const mockReports = [
    {
      id: 1,
      title: "Examen annuel - Lion",
      description: "Le lion est en bonne santé générale.",
      date: "2024-11-10",
      animal: "Lion",
    },
    {
      id: 2,
      title: "Problème digestif - Éléphant",
      description: "Diagnostic d'un problème digestif, suivi nécessaire.",
      date: "2024-11-15",
      animal: "Éléphant",
    },
    {
      id: 3,
      title: "Vaccination - Girafe",
      description: "Vaccination annuelle effectuée avec succès.",
      date: "2024-11-18",
      animal: "Girafe",
    },
  ];

  // États pour la gestion des filtres
  const [filteredReports, setFilteredReports] = useState(mockReports);
  const [filters, setFilters] = useState({ animal: "", startDate: "", endDate: "" });

  // Gestion des filtres
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    let filtered = mockReports;

    // Filtre par animal
    if (filters.animal) {
      filtered = filtered.filter((report) =>
        report.animal.toLowerCase().includes(filters.animal.toLowerCase())
      );
    }

    // Filtre par date
    if (filters.startDate) {
      filtered = filtered.filter((report) => new Date(report.date) >= new Date(filters.startDate));
    }
    if (filters.endDate) {
      filtered = filtered.filter((report) => new Date(report.date) <= new Date(filters.endDate));
    }

    setFilteredReports(filtered);
  };

  const resetFilters = () => {
    setFilters({ animal: "", startDate: "", endDate: "" });
    setFilteredReports(mockReports);
  };

  return (
    <div className="vet-reports-list">
      <h2 className="text-center my-4">Rapports Vétérinaires</h2>

      {/* Section de filtres */}
      <Card className="mb-4 p-3 shadow-sm">
        <h4>Filtres</h4>
        <Form className="row g-3">
          <Form.Group className="col-md-4" controlId="filterAnimal">
            <Form.Label>Animal</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex : Lion"
              name="animal"
              value={filters.animal}
              onChange={handleFilterChange}
            />
          </Form.Group>
          <Form.Group className="col-md-4" controlId="filterStartDate">
            <Form.Label>Date de début</Form.Label>
            <Form.Control
              type="date"
              name="startDate"
              value={filters.startDate}
              onChange={handleFilterChange}
            />
          </Form.Group>
          <Form.Group className="col-md-4" controlId="filterEndDate">
            <Form.Label>Date de fin</Form.Label>
            <Form.Control
              type="date"
              name="endDate"
              value={filters.endDate}
              onChange={handleFilterChange}
            />
          </Form.Group>
        </Form>
        <div className="mt-3 text-center">
          <Button variant="primary" className="me-2" onClick={applyFilters}>
            Appliquer les filtres
          </Button>
          <Button variant="secondary" onClick={resetFilters}>
            Réinitialiser
          </Button>
        </div>
      </Card>

      {/* Tableau des rapports */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Titre</th>
            <th>Description</th>
            <th>Date</th>
            <th>Animal</th>
          </tr>
        </thead>
        <tbody>
          {filteredReports.length > 0 ? (
            filteredReports.map((report, index) => (
              <tr key={report.id}>
                <td>{index + 1}</td>
                <td>{report.title}</td>
                <td>{report.description}</td>
                <td>{report.date}</td>
                <td>{report.animal}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                Aucun rapport trouvé.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default VetReportsList;

import React from "react";
import "../../styles/adminDashboard.css"
import { Button, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const goToManageAccounts = () => {
    navigate('/admin/GestionEmployes');
  };

  const goToManageZooEntities = () => {
    navigate('/admin/GestionServices');
  };
  const goToVeterinaryReports = () => {
    navigate('/admin/RapportsVeterinaire');
  };
  
  const goToAnimalsStats = () => {
    navigate('/admin/ConsultationsDesAnimaux');
  };
  return (
    <div className="admin-dashboard container">
      <header className="dashboard-header text-center mt-4">
        <h1>Tableau de Bord Administrateur</h1>
      </header>

      <div className="dashboard-nav d-flex justify-content-center mt-4">
      <Button
          variant="success"
          className=" m-2"
          onClick={goToManageAccounts} 
        >
          <i className="fa fa-user-plus"></i> Gestion des Comptes
        </Button>
        <Button variant="success" className="m-2" onClick={goToManageZooEntities} >
          <i className="fa fa-cogs"></i> Gestion des Entités du Zoo
        </Button>
        <Button variant="success" className="m-2" onClick={goToVeterinaryReports} >
          <i className="fa fa-medkit"></i> Comptes Rendus Vétérinaires
        </Button>
        <Button variant="success" className="m-2" onClick={goToAnimalsStats} >
          <i className="fa fa-chart-bar"></i> Consultations Animaux
        </Button>
      </div>

      <main className="dashboard-main mt-5">
        <Row className=" dashboard-admin-row g-4">
          <Col xs={12} md={4} className="col-admin-dashboard">
            <Card className=" text-center shadow-sm card-dashboard-admin" >
              <Card.Body>
                <h3><i className="fa fa-paw"></i> Nombre d'animaux</h3>
                <p>45</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="col-admin-dashboard">
            <Card className="text-center shadow-sm card-dashboard-admin">
              <Card.Body>
                <h3><i className="fa fa-calendar-check"></i> Consultations Aujourd'hui</h3>
                <p>12</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="col-admin-dashboard" >
            <Card className="text-center shadow-sm card-dashboard-admin">
              <Card.Body>
                <h3><i className="fa fa-users"></i> Employés Actifs</h3>
                <p>8</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </main>
    </div>
  );
};

export default AdminDashboard;

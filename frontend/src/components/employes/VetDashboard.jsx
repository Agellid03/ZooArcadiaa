import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/vetDashboard.css";

const VetDashboard = () => {
  const navigate = useNavigate();

  const goToVetReports = () => {
    navigate('/employes/VetRapports');
  };

  const goToFoodHistory = () => {
    navigate('/employes/AlimentationHistorique');
  };

  return (
    <div className="vet-dashboard">
      <h2>Bienvenue, Vétérinaire</h2>
      <p>Accédez aux différentes sections pour gérer vos tâches.</p>

      <div className="vet-dashboard-buttons">
        <Button
          variant="primary"
          onClick={goToVetReports} 
          className="dashboard-button"
        >
          <i className="fa fa-file-text"></i> Gérer les comptes rendus
        </Button>

        <Button
          variant="success"
          onClick={goToFoodHistory} 
          className="dashboard-button"
        >
          <i className="fa fa-cutlery"></i> Historique de l'alimentation
        </Button>
      </div>
    </div>
  );
};

export default VetDashboard;

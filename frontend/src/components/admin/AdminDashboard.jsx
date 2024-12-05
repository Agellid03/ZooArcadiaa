import React from "react";
import ManageAccounts from "../admin/ManageAccounts";
import ManageZooEntities from "../admin/ManageZooEntities";
import VeterinaryReports from "../admin/VeterinaryReports";
import AdminStats from "../admin/AdminStats";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Espace Administrateur</h1>
      <ManageAccounts />
      <ManageZooEntities />
      <VeterinaryReports />
      <AdminStats />
    </div>
  );
};

export default AdminDashboard;

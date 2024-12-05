import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Home from "../pages/Home";
import Services from "../pages/Services";
import AllHabitats from "../pages/AllHabitats";
import DetailsHabitat from "../pages/DetailsHabitat";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import AdminDashboard from "../components/admin/AdminDashboard";
import ManageAccounts from "../components/admin/ManageAccounts";
import ManageZooEntities from "../components/admin/ManageZooEntities"
import VeterinaryReports from "../components/admin/VeterinaryReports"

const AppRouter = () => {
  return (
    <div className="page-container">
      <Header /> 
      <div className="content-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/habitats" element={<AllHabitats />} />
          <Route path="/habitats/:name" element={<DetailsHabitat />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/admin/*" element={<AdminDashboard/>} />
          <Route path="admin/GestionEmployes" element={<ManageAccounts/>} ></Route>
          <Route path="admin/GestionServices" element={<ManageZooEntities/>} ></Route>
          <Route path="admin/RapportsVeterinaire" element={<VeterinaryReports/>} ></Route>
        </Routes>
        </div>
      <Footer /> 
    </div>
      
  );
};

export default AppRouter;

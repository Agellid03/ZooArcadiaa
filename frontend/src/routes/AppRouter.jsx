import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Home from "../pages/Home";
import Services from "../pages/Services";
import AllHabitats from "../pages/AllHabitats";
import DetailsHabitat from "../pages/DetailsHabitat";
import Contacts from "../pages/Contacts";

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
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default AppRouter;

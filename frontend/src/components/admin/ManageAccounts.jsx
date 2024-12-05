import React, { useState } from "react";

const ManageAccounts = () => {
  const [formData, setFormData] = useState({ email: "", role: "employee" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Compte créé :", formData);
    // Appel API à implémenter pour envoyer les données au backend
  };

  return (
    <div>
      <h2>Gestion des Comptes</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email :
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </label>
        <label>
          Rôle :
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          >
            <option value="employee">Employé</option>
            <option value="veterinarian">Vétérinaire</option>
          </select>
        </label>
        <button type="submit">Créer le compte</button>
      </form>
    </div>
  );
};

export default ManageAccounts;

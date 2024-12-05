import React, { useState } from "react";

const ManageZooEntities = () => {
  const [habitats, setHabitats] = useState([
    { id: 1, name: "Savane", description: "Habitat des animaux de la savane" },
  ]);
  const [newHabitat, setNewHabitat] = useState({ name: "", description: "" });

  const addHabitat = () => {
    setHabitats([...habitats, { id: Date.now(), ...newHabitat }]);
    setNewHabitat({ name: "", description: "" });
  };

  return (
    <div>
      <h2>Gestion des Habitats</h2>
      <ul>
        {habitats.map((habitat) => (
          <li key={habitat.id}>{habitat.name}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Nom"
          value={newHabitat.name}
          onChange={(e) =>
            setNewHabitat({ ...newHabitat, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={newHabitat.description}
          onChange={(e) =>
            setNewHabitat({ ...newHabitat, description: e.target.value })
          }
        />
        <button onClick={addHabitat}>Ajouter Habitat</button>
      </div>
    </div>
  );
};

export default ManageZooEntities;

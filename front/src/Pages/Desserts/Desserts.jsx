import { useEffect, useState } from "react";
import axios from "axios";
import "../Entree/Entree.css";

const Desserts = () => {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/car/desserts`)
      .then(response => setDesserts(response.data))
      .catch(error => console.error("Erreur lors du chargement des desserts :", error));
  }, []);

  return (
    <div className="entree-container">
      <h2>Nos Desserts</h2>

      <div className="entree-grid">
        {desserts.map((item, index) => (
          <div key={index} className="entree-card">
            {item.image && (
              <img
                src={`${import.meta.env.VITE_API_URL}/image/desserts/${item.image}`}
                alt={item.nom}
                className="entree-image"
              />
            )}
            <h3>{item.nom}</h3>
            {item.ingredients && (
              <p><strong>Ingrédients :</strong> {item.ingredients}</p>
            )}
            <p><strong>Prix :</strong> {item.prix}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Desserts;

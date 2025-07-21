import { useEffect, useState } from "react";
import axios from "axios";
import "./Entree.css"; // crée un fichier CSS pour le style

const Entree = () => {
  const [entrees, setEntrees] = useState([]);
  const [categorieActive, setCategorieActive] = useState("entree");

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/car/entree`)
      .then((response) => {
        setEntrees(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des entrées :", error);
      });
  }, []);

  const categories = [
    { label: "Entrées", value: "entree" },
    { label: "Salades Chaudes", value: "salade_chaude" },
    { label: "Salades Froides", value: "salade_froide" }
  ];

  return (
    <div className="entree-container">
      <h2>Nos {categories.find(c => c.value === categorieActive).label}</h2>

      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={categorieActive === cat.value ? "active" : ""}
            onClick={() => setCategorieActive(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="entree-grid">
        {entrees
          .filter((item) => item.categorie === categorieActive)
          .map((item, index) => (
            <div key={index} className="entree-card">
              {item.image && (
                <img
                src={`${import.meta.env.VITE_API_URL}/image/entree/${item.image}`}
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

export default Entree;

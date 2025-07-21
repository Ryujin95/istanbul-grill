import { useEffect, useState } from "react";
import axios from "axios";
import "../Entree/Entree.css";
 // même CSS que pour les entrées

const Assiettes = () => {
  const [assietes, setAssietes] = useState([]);
const [categorieActive, setCategorieActive] = useState("viande_rouge");


  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/car/assiettes`)
      .then((response) => {
        setAssietes(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des assiettes :", error);
      });
  }, []);

  const categories = [
        { label: "Viandes Rouges", value: "viande_rouge" },
        { label: "Viandes Blanches", value: "viande_blanche" },
        { label: "Poissons", value: "poisson" },
        { label: "Mixtes", value: "mixte" },
      ];
      

  return (
    <div className="entree-container">
      <h2>Nos Assiettes - {categories.find(c => c.value === categorieActive).label}</h2>

      <div className="category-buttons">
        {categories.map(cat => (
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
        {assietes
          .filter(item => item.categorie === categorieActive)
          .map((item, index) => (
            <div key={index} className="entree-card">
              {item.image && (
                <img
                src={`${import.meta.env.VITE_API_URL}/image/${item.image}`}
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

export default Assiettes;

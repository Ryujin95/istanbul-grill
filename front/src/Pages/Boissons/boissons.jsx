import { useEffect, useState } from "react";
import axios from "axios";
import "../Entree/Entree.css"; // Réutilisation du CSS des entrées

const Boissons = () => {
  const [boissons, setBoissons] = useState([]);
  const [categorieActive, setCategorieActive] = useState("sans_alcool");

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/car/boissons`)
      .then((response) => setBoissons(response.data))
      .catch((error) => console.error("Erreur lors du chargement des boissons :", error));
  }, []);

  const categories = [
    { label: "Sans Alcool", value: "sans_alcool" },
    { label: "Bière", value: "biere" },
    { label: "Vin", value: "vin" },
    { label: "Whisky", value: "whisky" },
    { label: "Apéritifs & Digestifs", value: "aperitif_digestif" },
    { label: "Boissons Chaudes", value: "boisson_chaude" },
  ];

  return (
    <div className="entree-container">
      <h2>Nos Boissons - {categories.find(c => c.value === categorieActive)?.label}</h2>

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
        {boissons
          .filter(item => item.categorie === categorieActive)
          .map((item, index) => (
            <div key={index} className="entree-card">
              {item.image && (
                <img
                  src={`${import.meta.env.VITE_API_URL}/image/boissons/${item.image}`}
                  alt={item.nom}
                  className="entree-image"
                />
              )}
              <h3>{item.nom}</h3>
              {item.volume && <p><strong>Volume :</strong> {item.volume}</p>}
              <p><strong>Prix :</strong> {item.prix}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Boissons;

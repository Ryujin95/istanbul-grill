import { useEffect, useState } from "react";
import axios from "axios";
import "./Sandwich.css";

const Sandwich = () => {
  const [sandwichs, setSandwichs] = useState([]);
  const [categorieActive, setCategorieActive] = useState("viande_blanche");
  const [dockLeft, setDockLeft] = useState(false);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/car/sandwich`)
      .then(response => setSandwichs(response.data))
      .catch(error => console.error("Erreur lors du chargement des sandwichs :", error));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setDockLeft(window.scrollY > 220); // seuil identique à Pizza
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const categories = [
    { label: "Viande Blanche", value: "viande_blanche" },
    { label: "Viande Rouge", value: "rouge" },
    { label: "Mixte", value: "mixte" },
  ];

  const labelActif = categories.find(c => c.value === categorieActive)?.label ?? "";

  return (
    <div className={`entree-container ${dockLeft ? "filters-docked" : ""}`}>
      <h2>Nos Sandwichs - {labelActif}</h2>

      <div className={`category-buttons ${dockLeft ? "dock-left" : ""}`}>
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
        {sandwichs
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
              <p><strong>Prix seul :</strong> {item.prix_seul}</p>
              <p><strong>Avec frites :</strong> {item.prix_frites}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sandwich;

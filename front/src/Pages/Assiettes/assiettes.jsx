import { useEffect, useState } from "react";
import axios from "axios";
import "../Entree/Entree.css"; // même CSS que pour les entrées

const Assiettes = () => {
  const [assietes, setAssietes] = useState([]);
  const [categorieActive, setCategorieActive] = useState("viande_rouge");
  const [dockLeft, setDockLeft] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/car/assiettes`)
      .then((response) => {
        setAssietes(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des assiettes :", error);
      });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setDockLeft(window.scrollY > 220); // seuil identique aux autres pages
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const categories = [
    { label: "Viandes Rouges", value: "viande_rouge" },
    { label: "Viandes Blanches", value: "viande_blanche" },
    { label: "Poissons", value: "poisson" },
    { label: "Mixtes", value: "mixte" },
  ];

  const labelActif =
    categories.find((c) => c.value === categorieActive)?.label ?? "";

  const handleCategoryClick = (value) => {
    setCategorieActive(value);
    if (dockLeft) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className={`entree-container ${dockLeft ? "filters-docked" : ""}`}>
      <h2>Nos Assiettes - {labelActif}</h2>

      <div className={`category-buttons ${dockLeft ? "dock-left" : ""}`}>
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={categorieActive === cat.value ? "active" : ""}
            onClick={() => handleCategoryClick(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="entree-grid">
        {assietes
          .filter((item) => item.categorie === categorieActive)
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
                <p>
                  <strong>Ingrédients :</strong> {item.ingredients}
                </p>
              )}
              <p>
                <strong>Prix :</strong> {item.prix}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Assiettes;

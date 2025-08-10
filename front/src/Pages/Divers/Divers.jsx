import { useEffect, useState } from "react";
import axios from "axios";
import "../Entree/Entree.css"; // réutilisation du CSS existant

const Divers = () => {
  const [divers, setDivers] = useState([]);
  const [categorieActive, setCategorieActive] = useState("burger");
  const [dockLeft, setDockLeft] = useState(false);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/car/divers`)
      .then((response) => {
        setDivers(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des divers :", error);
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
    { label: "Burgers", value: "burger" },
    { label: "Croques", value: "croque" },
    { label: "Pain au Four", value: "pain_au_four" },
    { label: "Tacos", value: "tacos" },
    { label: "Divers", value: "divers" },
  ];

  const labelActif = categories.find(c => c.value === categorieActive)?.label ?? "";

  const handleCategoryClick = (value) => {
    setCategorieActive(value);
    if (dockLeft) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className={`entree-container ${dockLeft ? "filters-docked" : ""}`}>
      <h2>Nos Divers - {labelActif}</h2>

      <div className={`category-buttons ${dockLeft ? "dock-left" : ""}`}>
        {categories.map(cat => (
          <button
            key={cat.value}
            className={categorieActive === cat.value ? "active" : ""}
            onClick={() => handleCategoryClick(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {categorieActive === "pain_au_four" && (
        <p className="description-categorie">
          Nos pains au four sont des sandwichs chauds et croustillants, préparés avec du pain maison passé au four.
          Garnis de viandes variées comme le kebab, le steak ou le poulet, ils sont servis simples ou accompagnés de frites
          pour un repas encore plus gourmand.
        </p>
      )}

      <div className="entree-grid">
        {divers
          .filter(item => item.categorie === categorieActive)
          .map((item, index) => (
            <div key={index} className="entree-card">
              {item.image && (
                <img
                  src={`${import.meta.env.VITE_API_URL}/image/divers/${item.image}`}
                  alt={item.nom}
                  className="entree-image"
                />
              )}
              <h3>{item.nom}</h3>
              <p><strong>Prix :</strong> {item.prix}</p>
              {item.ingredients && (
                <p><strong>Ingrédients :</strong> {item.ingredients}</p>
              )}
            </div>
          ))}
      </div>

      {categorieActive === "pain_au_four" && (
        <p style={{ fontStyle: "italic", marginTop: "10px", color: "white" }}>
          PS : Les images ne correspondent pas aux produits réels.
        </p>
      )}
    </div>
  );
};

export default Divers;

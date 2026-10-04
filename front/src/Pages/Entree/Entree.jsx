import { useState } from "react";
import "./Entree.css"; // crée un fichier CSS pour le style
import { ErrorState, LoadingState } from "../../Components/MenuFeedback/MenuFeedback";
import { useMenuData } from "../../hooks/useMenuData";

const Entree = () => {
  const [categorieActive, setCategorieActive] = useState("entree");
  const { data: entrees, error, isLoading, reload } = useMenuData("/car/entree");

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

      {isLoading && <LoadingState />}
      {error && <ErrorState message={error} onRetry={reload} />}
      {!isLoading && !error && <div className="entree-grid">
        {entrees
          .filter((item) => item.categorie === categorieActive)
          .map((item) => (
            <div key={`${item.categorie}-${item.nom}`} className="entree-card">
              {item.image && (
                <img
                src={`${import.meta.env.VITE_API_URL}/image/entree/${item.image}`}
                  alt={item.nom}
                  className="entree-image"
                  loading="lazy"
                  decoding="async"
                />
              )}
              <h3>{item.nom}</h3>
              {item.ingredients && (
                <p><strong>Ingrédients :</strong> {item.ingredients}</p>
              )}
              <p><strong>Prix :</strong> {item.prix}</p>
            </div>
        ))}
      </div>}
    </div>
  );
};

export default Entree;

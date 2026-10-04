import { useState } from "react";
import "../Entree/Entree.css"; // On réutilise le même CSS que les entrées
import { ErrorState, LoadingState } from "../../Components/MenuFeedback/MenuFeedback";
import { useMenuData } from "../../hooks/useMenuData";

const Boissons = () => {
  const [categorieActive, setCategorieActive] = useState("sans_alcool");
  const { data: boissons, error, isLoading, reload } = useMenuData("/car/boissons");

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
      <h2>Nos Boissons - {categories.find(c => c.value === categorieActive).label}</h2>

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

      {isLoading && <LoadingState />}
      {error && <ErrorState message={error} onRetry={reload} />}
      {!isLoading && !error && <div className="entree-grid">
        {boissons
          .filter(item => item.categorie === categorieActive)
          .map((item) => (
            <div key={`${item.categorie}-${item.nom}`} className="entree-card">
              {item.image && (
                <img
                  src={`${import.meta.env.VITE_API_URL}/image/boissons/${item.image}`}
                  alt={item.nom}
                  className="entree-image"
                  loading="lazy"
                  decoding="async"
                />
              )}
              <h3>{item.nom}</h3>
              <p><strong>Prix :</strong> {item.prix}</p>
            </div>
          ))}
      </div>}
    </div>
  );
};

export default Boissons;

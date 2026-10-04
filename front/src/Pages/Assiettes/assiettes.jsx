import { useEffect, useState } from "react";
import "../Entree/Entree.css"; // même CSS que pour les entrées
import { ErrorState, LoadingState } from "../../Components/MenuFeedback/MenuFeedback";
import { useMenuData } from "../../hooks/useMenuData";

const Assiettes = () => {
  const [categorieActive, setCategorieActive] = useState("viande_rouge");
  const [dockLeft, setDockLeft] = useState(false);
  const { data: assietes, error, isLoading, reload } = useMenuData("/car/assiettes");

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

      <p className="assiettes-info">
        Les accompagnements sont au choix : frites, salade, boulgour et riz.
      </p>

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

      {isLoading && <LoadingState />}
      {error && <ErrorState message={error} onRetry={reload} />}
      {!isLoading && !error && <div className="entree-grid">
        {assietes
          .filter((item) => item.categorie === categorieActive)
          .map((item) => (
            <div key={`${item.categorie}-${item.nom}`} className="entree-card">
              {item.image && (
                <img
                  src={`${import.meta.env.VITE_API_URL}/image/${item.image}`}
                  alt={item.nom}
                  className="entree-image"
                  loading="lazy"
                  decoding="async"
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
      </div>}
    </div>
  );
};

export default Assiettes;

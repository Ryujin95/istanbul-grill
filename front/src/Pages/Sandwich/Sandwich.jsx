import { useEffect, useState } from "react";
import "./Sandwich.css";
import { ErrorState, LoadingState } from "../../Components/MenuFeedback/MenuFeedback";
import { useMenuData } from "../../hooks/useMenuData";

const Sandwich = () => {
  const [categorieActive, setCategorieActive] = useState("viande_blanche");
  const [dockLeft, setDockLeft] = useState(false);
  const { data: sandwichs, error, isLoading, reload } = useMenuData("/car/sandwich");

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

  const labelActif =
    categories.find((c) => c.value === categorieActive)?.label ?? "";

  // Fonction centrale pour changer la catégorie et scroller en haut
  const handleCategoryClick = (value) => {
    setCategorieActive(value);
    if (dockLeft) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className={`entree-container ${dockLeft ? "filters-docked" : ""}`}>
      <h2>Nos Sandwichs - {labelActif}</h2>

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
        {sandwichs
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
                <strong>Prix seul :</strong> {item.prix_seul}
              </p>
              <p>
                <strong>Avec frites :</strong> {item.prix_frites}
              </p>
            </div>
          ))}
      </div>}
    </div>
  );
};

export default Sandwich;

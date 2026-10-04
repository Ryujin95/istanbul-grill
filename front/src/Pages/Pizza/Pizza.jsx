import { useEffect, useState } from "react";
import "../Entree/Entree.css";
import { ErrorState, LoadingState } from "../../Components/MenuFeedback/MenuFeedback";
import { useMenuData } from "../../hooks/useMenuData";

const Pizza = () => {
  const [categorieActive, setCategorieActive] = useState("pizza");
  const [dockLeft, setDockLeft] = useState(false);
  const { data: pizzas, error, isLoading, reload } = useMenuData("/car/pizzas");

  useEffect(() => {
    const onScroll = () => {
      setDockLeft(window.scrollY > 220);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const categories = [
    { label: "Pizzas", value: "pizza" },
    { label: "Pides", value: "pide" },
    { label: "Lahmacun", value: "lahmacun" }
  ];

  const labelActif = categories.find(c => c.value === categorieActive)?.label ?? "Pizzas";

  const handleCategoryClick = (value) => {
    setCategorieActive(value);
    if (dockLeft) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className={`entree-container ${dockLeft ? "filters-docked" : ""}`}>
      <h2>Nos {labelActif}</h2>

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

      {categorieActive === "pide" && (
        <p className="description-categorie">
          Le pide est une spécialité turque en forme de barque, garnie de fromage, de viande hachée ou de sucuk (saucisson turc). 
          Cuit au four, il est à la fois croustillant et fondant, idéal pour un repas complet et savoureux.
        </p>
      )}
      {categorieActive === "lahmacun" && (
        <p className="description-categorie">
          Le lahmacun est une galette fine d&apos;origine turque, recouverte d&apos;une préparation à base de viande hachée, de légumes et d&apos;épices.
          C&apos;est un plat léger, souvent roulé avec des légumes frais et du citron pour plus de fraîcheur.
        </p>
      )}

      {isLoading && <LoadingState />}
      {error && <ErrorState message={error} onRetry={reload} />}
      {!isLoading && !error && <div className="entree-grid">
        {pizzas
          .filter(pizza => pizza.categorie === categorieActive)
          .map((pizza) => (
            <div key={`${pizza.categorie}-${pizza.nom}`} className="entree-card">
              {pizza.image && (
                <img
                  src={`${import.meta.env.VITE_API_URL}/image/pizza/${pizza.image}`}
                  alt={pizza.nom}
                  className="entree-image"
                  loading="lazy"
                  decoding="async"
                />
              )}
              <h3>{pizza.nom}</h3>
              <p><strong>Ingrédients :</strong> {pizza.ingredients}</p>
              <p><strong>Prix :</strong> {pizza.prix}</p>
            </div>
          ))}
      </div>}
    </div>
  );
};

export default Pizza;

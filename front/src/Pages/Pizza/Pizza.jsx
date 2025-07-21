import { useEffect, useState } from "react";
import axios from "axios";
import "../Entree/Entree.css";

const Pizza = () => {
  const [pizzas, setPizzas] = useState([]);
  const [categorieActive, setCategorieActive] = useState("pizza");

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/car/pizza`)
      .then((response) => {
        setPizzas(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des pizzas :", error);
      });
  }, []);

  const categories = [
    { label: "Pizzas", value: "pizza" },
    { label: "Pides", value: "pide" },
    { label: "Lahmacun", value: "lahmacun" }
  ];

  const renderDescription = () => {
    if (categorieActive === "pide") {
      return (
        <p className="description-categorie">
          Le pide est une spécialité turque en forme de barque, garnie de fromage, de viande hachée ou de sucuk (saucisson turc). Cuit au four, il est à la fois croustillant et fondant, idéal pour un repas complet et savoureux.
        </p>
      );
    }
    if (categorieActive === "lahmacun") {
      return (
        <p className="description-categorie">
          Le lahmacun est une galette fine d'origine turque, recouverte d'une préparation à base de viande hachée, de légumes et d'épices. C'est un plat léger, souvent roulé avec des légumes frais et du citron pour plus de fraîcheur.
        </p>
      );
    }
    return null;
  };

  return (
    <div className="entree-container">
      <h2>Nos {categories.find(c => c.value === categorieActive).label}</h2>

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

      {renderDescription()}

      <div className="entree-grid">
        {pizzas
          .filter(pizza => pizza.categorie === categorieActive)
          .map((pizza, index) => (
            <div key={index} className="entree-card">
              {pizza.image && (
                <img
                  src={`${import.meta.env.VITE_API_URL}/image/pizza/${pizza.image}`}
                  alt={pizza.nom}
                  className="entree-image"
                />
              )}
              <h3>{pizza.nom}</h3>
              {pizza.ingredients && (
                <p><strong>Ingrédients :</strong> {pizza.ingredients}</p>
              )}
              <p><strong>Prix :</strong> {pizza.prix}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Pizza;

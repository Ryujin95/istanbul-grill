import "../Entree/Entree.css"; // tu peux réutiliser ce CSS
import { ErrorState, LoadingState } from "../../Components/MenuFeedback/MenuFeedback";
import { useMenuData } from "../../hooks/useMenuData";

const Desserts = () => {
  const { data: desserts, error, isLoading, reload } = useMenuData("/car/desserts");

  return (
    <div className="entree-container">
      <h2>Nos Desserts</h2>

      {isLoading && <LoadingState />}
      {error && <ErrorState message={error} onRetry={reload} />}
      {!isLoading && !error && <div className="entree-grid">
        {desserts.map((item) => (
          <div key={item.nom} className="entree-card">
            {item.image && (
              <img
                src={`${import.meta.env.VITE_API_URL}/image/desserts/${item.image}`}
                alt={item.nom}
                className="entree-image"
                loading="lazy"
                decoding="async"
              />
            )}
            <h3>{item.nom}</h3>
            <p><strong>Ingrédients :</strong> {item.ingredients}</p>
            <p><strong>Prix :</strong> {item.prix}</p>
          </div>
        ))}
      </div>}
    </div>
  );
};

export default Desserts;

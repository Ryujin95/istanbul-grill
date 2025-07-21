import React from 'react';
import './Accueil.css'; // Si tu veux styliser cette page

const Accueil = () => {
  return (
    <div className="accueil-container">
      <h2>Bienvenue au Restaurant</h2>
      <h2>Istanbul Grill</h2>
      <p>
        Situé juste en face du centre commercial des 3 Fontaines à Cergy Préfecture, le restaurant <strong>Istanbul Grill</strong> vous invite à découvrir une cuisine turque faite maison et 100% halal. Ici, chaque plat est préparé avec soin pour vous offrir une expérience généreuse et savoureuse.
      </p>

      <p>
        Vous pourrez choisir parmi une large sélection de sandwiches turcs, assiettes bien garnies, pizzas maison, pides, lahmacuns, burgers ou encore des desserts préparés avec amour comme le künefe ou le tiramisu.
      </p>

      <p>
        Nous sommes ouverts <strong>7j/7 de 11h30 à 22h</strong>. Vous pouvez venir manger sur place dans une ambiance conviviale et chaleureuse, ou bien emporter votre commande pour en profiter chez vous.
      </p>

      <p>
      Nous vous invitons à parcourir notre menu en cliquant sur les différentes catégories ci-dessus. Il y en a pour tous les goûts, que vous soyez en famille, entre amis ou seul.
      </p>

      <p>
        Alors poussez la porte du <strong>restaurant Istanbul Grill</strong> et venez vous régaler !
      </p>
    </div>
  );
};

export default Accueil;

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found">
      <p>Erreur 404</p>
      <h1>Cette page n’existe pas.</h1>
      <Link to="/">Retour à l’accueil</Link>
    </section>
  );
}

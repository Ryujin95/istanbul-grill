import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./Components/Header/Header";
import Sandwich from "./Pages/Sandwich/Sandwich";
import Accueil from "./Pages/Accueil/Accueil";
import Entree from "./Pages/Entree/Entree";
import Assiettes from "./Pages/Assiettes/assiettes"; // ← tu l'avais oublié
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Boissons from "./Pages/Boissons/boissons";
import Desserts from "./Pages/Desserts/Desserts";
import Pizza from "./Pages/Pizza/Pizza";
import Divers from "./Pages/Divers/Divers";
import MentionsLegales from "./Pages/CGU-MentionLegales/MentionsLegales";
import CGU from "./Pages/CGU-MentionLegales/CGU";
import NotFound from "./Pages/NotFound/NotFound";




const pageTitles = {
  "/": "Restaurant Istanbul Grill | Cergy",
  "/sandwich": "Sandwichs | Istanbul Grill",
  "/entree": "Entrées | Istanbul Grill",
  "/assiettes": "Assiettes | Istanbul Grill",
  "/boissons": "Boissons | Istanbul Grill",
  "/desserts": "Desserts | Istanbul Grill",
  "/pizzas": "Pizzas, pides et lahmacun | Istanbul Grill",
  "/divers": "Burgers, tacos et plus | Istanbul Grill",
  "/mentions-legales": "Mentions légales | Istanbul Grill",
  "/cgu": "CGU | Istanbul Grill",
};

function AppContent() {
  const { pathname } = useLocation();
  const title = pageTitles[pathname] ?? "Page introuvable | Istanbul Grill";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Découvrez le menu du restaurant Istanbul Grill à Cergy : sandwichs, assiettes, pizzas, desserts et boissons." />
      </Helmet>

      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/sandwich" element={<Sandwich />} />
        <Route path="/entree" element={<Entree />} />
        <Route path="/assiettes" element={<Assiettes />} /> 
        <Route path="/boissons" element={<Boissons />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/pizzas" element={<Pizza />} />
        <Route path="/divers" element={<Divers />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

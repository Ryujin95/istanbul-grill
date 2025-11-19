import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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




function App() {
  return (
    <Router>
      <Header />
    <br/>
    <br/>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/sandwich" element={<Sandwich />} />
        <Route path="/entree" element={<Entree />} />
        <Route path="/assiettes" element={<Assiettes />} /> {/* ← route ajoutée */}
        <Route path="/boissons" element={<Boissons />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/pizzas" element={<Pizza />} />
        <Route path="/divers" element={<Divers />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/cgu" element={<CGU />} />
        {/* Tu peux ajouter /pizzas, /boissons, etc. ici plus tard */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

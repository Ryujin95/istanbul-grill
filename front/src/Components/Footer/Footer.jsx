import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.block}>
          <h3 style={styles.h3}>Restaurant Istanbul Grill</h3>
          <p>
            15 Place des Cerclades, 95000 Cergy
            <br />
            <a
              href="https://maps.app.goo.gl/msUi8EmK5E5wWzp29"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Voir sur Google Maps
            </a>
          </p>
          <p>
            Téléphone :{" "}
            <a style={styles.link} href="tel:0130322169">
              01 30 32 21 69
            </a>
          </p>
          <p>Ouvert 7j/7 de 11h30 à 22h</p>
        </div>

        <div style={styles.block}>
          <h3 style={styles.h3}>Suivez-nous</h3>
          <a
            style={styles.link}
            href="https://www.facebook.com/istambulgrill/?locale=fr_FR"
          >
            Facebook
          </a>
          <a
            style={styles.link}
            href="https://www.instagram.com/explore/locations/659802381029062/restaurant-istanbul-grill/"
          >
            Instagram
          </a>
        </div>

        <div style={styles.block}>
          <h3 style={styles.h3}>Commandez sur</h3>
          <a
            style={styles.link}
            href="https://www.ubereats.com/fr/store/la-maison-du-gourmet-istanbul-grill/fCbmbn1MTLiIrLoDIBXmbQ?srsltid=AfmBOopH7VFh1-UzADLShSNe3IsuA83D1yozRnmaqO9sWV1bQ7eOJiEq"
          >
            Uber Eats
          </a>
        </div>
      </div>

      <div>
        <Link to="/MentionsLegales" style={styles.link}>
          Mentions légales
        </Link>
        <Link to="/CGU" style={styles.link}>
          CGU
        </Link>
      </div>

      <p style={{ marginTop: "20px" }}>
        Nous acceptons : Ticket Restaurant, CB, Visa
      </p>
    </footer>
  );
};

export default Footer;

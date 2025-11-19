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
            <p>Téléphone : <a style={styles.link} href="tel:0130322169">01 30 32 21 69</a></p>
            <p>Ouvert 7j/7 de 11h30 à 22h</p>
          </div>
      
          <div style={styles.block}>
            <h3 style={styles.h3}>Suivez-nous</h3>
            <a style={styles.link} href="https://www.facebook.com/istambulgrill/?locale=fr_FR">Facebook</a>
            <a style={styles.link} href="https://www.instagram.com/explore/locations/659802381029062/restaurant-istanbul-grill/">Instagram</a>
          </div>
      
          <div style={styles.block}>
            <h3 style={styles.h3}>Commandez sur</h3>
            <a style={styles.link} href="https://www.ubereats.com/fr/store/la-maison-du-gourmet-istanbul-grill/fCbmbn1MTLiIrLoDIBXmbQ?srsltid=AfmBOopH7VFh1-UzADLShSNe3IsuA83D1yozRnmaqO9sWV1bQ7eOJiEq">Uber Eats</a>
          </div>
        </div>

        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'row', marginLeft: '20rem', gap: '5rem'}}>
          <a href="/MentionsLegales" style={styles.link}>Mentions légales</a>
          <a href="/cgu" style={styles.link}>CGU</a>
        </div>
      
        <p style={{ marginTop: '20px' }}>Nous acceptons : Ticket Restaurant, CB, Visa</p>
      </footer>
      
    );
  };
  
  const styles = {
    footer: {
      background: 'radial-gradient(circle, #491902, #0f0201)',
      color: '#fff',
      textAlign: 'center',
      padding: '20px',
      marginTop: '40px'
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      gap: '4rem',
      flexWrap: 'wrap',
      textAlign: 'left'
    },
    block: {
      minWidth: '200px'
    },
    h3: {
      color: '#f5a623',
      marginBottom: '0.5rem',
      fontSize: '1.3rem'
    },
    link: {
      color: '#f5a623',
      textDecoration: 'none',
      display: 'block',
      marginBottom: '0.3rem'
    }
  };  
  export default Footer;
  
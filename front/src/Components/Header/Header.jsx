import { useState } from 'react';
import halalLogo from '../../assets/100-halal-sticker-label_24886-318.avif';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isPlatsOpen, setIsPlatsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => {
    setIsPlatsOpen(false);
    setIsMobileMenuOpen(false);
  };
  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsPlatsOpen(false);
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <img src={halalLogo} alt="Logo Halal" className={styles.logoHalal} />

        <div className={styles.enseigne}>
          <h4>RESTAURANT</h4>
          <h1><span>I</span>STANBUL</h1>
          <div className={styles.grill}>
            <p></p>
            <h3>GRILL</h3>
            <p></p>
          </div>
        </div>

        <div className={styles.logo7j7}>
          <h5>7J/7</h5>
          <h6>11H30-22H</h6>
        </div>
      </div>

      <div className={styles.mobileControls}>
        <img src={halalLogo} alt="Certification halal" className={styles.mobileHalalLogo} />
        <button
          type="button"
          className={styles.menuToggle}
          aria-label="Ouvrir le menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="main-navigation"
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={styles.mobileHours} aria-label="Ouvert 7 jours sur 7, de 11h30 à 22h">
          <strong>7J/7</strong>
          <span>11H30-22H</span>
        </div>
      </div>

      <nav id="main-navigation" className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ""}`}>
        <NavLink
          to="/"
          onClick={closeMobileMenu}
          className={({ isActive }) =>
            isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
          }
        >
          <span>Accueil</span>
        </NavLink>

        <NavLink
          to="/entree"
          onClick={closeMobileMenu}
          className={({ isActive }) =>
            isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
          }
        >
          <span>Entrées</span>
        </NavLink>

        <div
          className={`${styles.dropdown} ${isPlatsOpen ? styles.open : ""}`}
          onMouseEnter={() => setIsPlatsOpen(true)}
          onMouseLeave={() => setIsPlatsOpen(false)}
        >
          <button
            type="button"
            className={`${styles.navItem} ${styles.navItemPlats} ${styles.dropdownToggle}`}
            aria-haspopup="true"
            aria-expanded={isPlatsOpen}
            aria-controls="plats-menu"
            onClick={() => setIsPlatsOpen((isOpen) => !isOpen)}
          >
            <span>Plats</span>
          </button>
          <div id="plats-menu" className={styles.dropdownContent}>
            <NavLink
              to="/sandwich"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
              }
            >
              <span>Sandwichs</span>
            </NavLink>

            <NavLink
              to="/assiettes"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
              }
            >
              <span>Assiettes</span>
            </NavLink>

            <NavLink
              to="/pizzas"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
              }
            >
              <span>Pizza</span>
            </NavLink>

            <NavLink
              to="/divers"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
              }
            >
              <span>Divers</span>
            </NavLink>
          </div>
        </div>

        <NavLink
          to="/desserts"
          onClick={closeMobileMenu}
          className={({ isActive }) =>
            isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
          }
        >
          <span>Desserts</span>
        </NavLink>

        <NavLink
          to="/boissons"
          onClick={closeMobileMenu}
          className={({ isActive }) =>
            isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
          }
        >
          <span>Boissons</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

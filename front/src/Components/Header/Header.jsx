import React from 'react';
import halalLogo from '../../assets/100-halal-sticker-label_24886-318.avif';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
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

      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
          }
        >
          <span>Accueil</span>
        </NavLink>

        <NavLink
          to="/entree"
          className={({ isActive }) =>
            isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
          }
        >
          <span>Entrées</span>
        </NavLink>

        <div className={styles.dropdown}>
          <span className={`${styles.navItem} ${styles.navItemPlats}`}><span>Plats</span></span>
          <div className={styles.dropdownContent}>
            <NavLink
              to="/sandwich"
              className={({ isActive }) =>
                isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
              }
            >
              <span>Sandwichs</span>
            </NavLink>

            <NavLink
              to="/assiettes"
              className={({ isActive }) =>
                isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
              }
            >
              <span>Assiettes</span>
            </NavLink>

            <NavLink
              to="/pizzas"
              className={({ isActive }) =>
                isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
              }
            >
              <span>Pizza</span>
            </NavLink>

            <NavLink
              to="/divers"
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
          className={({ isActive }) =>
            isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
          }
        >
          <span>Desserts</span>
        </NavLink>

        <NavLink
          to="/boissons"
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

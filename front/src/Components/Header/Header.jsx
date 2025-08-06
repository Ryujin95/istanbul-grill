import React from 'react';
import halalLogo from '../../assets/100-halal-sticker-label_24886-318.avif';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

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
        <Link to="/" className={styles.navItem}><span>Accueil</span></Link>
        <Link to="/entree" className={styles.navItem}><span>Entrées</span></Link>

        <div className={styles.dropdown}>
          <span className={`${styles.navItem} ${styles.navItemPlats}`}><span>Plats</span></span>
          <div className={styles.dropdownContent}>
            <Link to="/sandwich" className={styles.navItem}><span>Sandwichs</span></Link>
            <Link to="/assiettes" className={styles.navItem}><span>Assiettes</span></Link>
            <Link to="/pizzas" className={styles.navItem}><span>Pizza</span></Link>
            <Link to="/divers" className={styles.navItem}><span>Divers</span></Link>
          </div>
        </div>

        <Link to="/desserts" className={styles.navItem}><span>Desserts</span></Link>
        <Link to="/boissons" className={styles.navItem}><span>Boissons</span></Link>
      </nav>
    </header>
  );
};

export default Header;

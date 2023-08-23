import { useState } from 'react';
import menuImage from '../../../assets/images/menu.svg';
import classes from "./Navbar.module.css";
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function toggleMenu()
    {
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <nav className={classes.navbar}>
    <div className={classes.menuContainer}>
        <p>LOGO</p>
        <img
        onClick={toggleMenu}
        src={menuImage} 
        alt="Bouton pour ouvrir le menu"
         className={classes.menuImage} />
        </div>

        <ul className={classes.menu} style={{left: isMenuOpen ? '0px' : '-100%'}}>
            <li className={classes.lien}><a href="">Accueil</a></li>
            <li className={classes.lien}><a href="">Contact</a></li>
            <li className={classes.lien}><a href="">A propos</a></li>
        </ul>

    </nav>
  )
}

// dépendances
import { Link, NavLink } from 'react-router';
// Import du logo
import logo from '../assets/logo.svg';
// Import du style 
// import '../style/utils/_mixins.scss';
// import '../style/components/_header.scss';
import './../style/components/_header.scss';


export default function Header() {
  return (
    <header>
      <Link to="/"><img src={logo} alt="Kasa" /></Link>
      
      <nav>
         <ul>
            <li>
               <NavLink to="/">
                  Accueil
               </NavLink> 
            </li>
            <li>
               <NavLink to="/about">
                  A propos
               </NavLink>
            </li>
         </ul>
      </nav>
    </header>
  );
}
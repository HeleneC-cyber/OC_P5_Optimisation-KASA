// Import du logo
import logoFooter from '../assets/logoFooter.svg';
// import du style
import './../style/components/_footer.scss';


export default function Footer() {
    return (
        <footer>
            <img src={logoFooter} alt="Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
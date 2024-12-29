// Import des dépendances
import { Link } from "react-router";
// Import style
import './../style/pages/_pageNotFound.scss';


const PageNotFound = () => {
    return (
        <main className="large-main-container">
            <h1>404</h1>
            <p><span>Oups! La page que</span> vous demandez n’existe pas.</p>
            <Link to="/" >Retourner sur la page d’accueil</Link>
        </main>
    );
};

export default PageNotFound;

// Import des dépendances
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
// Import des composants
import TagList from '../components/tagList';
import StarsRating from "../components/starsRating";
import Collapsible from "../components/collapsible";
import Slider from "../components/slider";
// Import data
import lodgings from './../data/lodging.json';
// Import style
import './../style/pages/_lodgingPage.scss';


const LodgingPage = () => {

    // Récupération de l'id de la route (carte logement sélectionnée)
    const { id } = useParams()

    // Initialise une variable pour rediriger
    const navigate = useNavigate()

     // Recherche du logement correspondant à l'id
    const lodgingItem = lodgings.find(lodgingItem => lodgingItem.id === id)

    useEffect(() => {
        if (!lodgingItem) {
            // Si le logement n'existe pas, redirige vers la page d'erreur 404
            navigate("/404", { replace: true })
        }
    }, [lodgingItem, navigate]) // Effet exécuté si lodgingItem ou navigate change

    // Si lodgingItem n'existe pas, ne rend rien (navigate redirige automatiquement)
    if (!lodgingItem) {
        return null
    }

  // Sinon affiche les détails de la fiche logement
    return (
        
        <main>
            {lodgingItem.pictures && <Slider pictures={lodgingItem.pictures} title={lodgingItem.title}/>}

            <div className="desc-container">

                <div className="titles-tags-container">
                    <h1>{lodgingItem.title}</h1>
                    <p className="lodging-location">{lodgingItem.location}</p>
                    { //Si les tags existent dans l'objet lodgingItem alors on affiche le composant TagList
                        lodgingItem.tags && <TagList key={id} tags={lodgingItem.tags} />}
                </div>

                <div className="profil-rating-container">
                    {//Même logique que les tags, pour la notation "rating"
                        lodgingItem.rating && <StarsRating rating={lodgingItem.rating} />}
                    <div className="profil">
                        {/* Replace remplace ici l'espace entre le nom et le prénom par un retour à la ligne */}
                        <p className="profil-name">{lodgingItem.host?.name.replace(" ", "\n")}</p>
                        <div className="profil-overlay">
                            <img src={lodgingItem.host?.picture} alt={lodgingItem.host?.name} />
                        </div>
                    </div>
                </div>

            </div>


            <div className="collapsibles-container">
                    <Collapsible key={lodgingItem.id} title="Description" description={lodgingItem.description} />
                    <Collapsible key={lodgingItem.equipements} title="Équipements" description={lodgingItem.equipments} />
            </div>

        </main>
    )
}

export default LodgingPage;
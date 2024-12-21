// Import des dépendances
import { useParams } from "react-router";
import { useEffect, useState } from "react";

import TagList from '../components/tagList';
import lodgings from './../data/lodging.json';
import StarsRating from "../components/starsRating";

// Import style
import './../style/pages/_lodgingPage.scss';


const LodgingPage = () => {
    // Récupération de l'id de la route (carte sélectionnée)
    const { id } = useParams()
    // Initialisation de la variable lodgingItem comme objet
    const [lodgingItem, setLodgingItem] = useState({})
    useEffect(() => {
        // Premier paramètre : récupération de l'objet du tableau.json correspondant à l'id
        const item = lodgings.filter((item) => (item.id === id))
        // et ajout de celui-ci dans la variable lodgingItem
        setLodgingItem(item[0])
    }, []) //deuxième paramètre déclenche l'effet uniquement au chargement de la page

    //
    return (
        <main>
            {/* <Slideshow pictures= /> */}
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
                        <p className="profil-name">{lodgingItem.host?.name.replace(" ", "\n") }</p> 
                        <div className="profil-overlay">
                        <img src={lodgingItem.host?.picture} alt={lodgingItem.host?.name} />
                        </div>
                    </div>
                </div>


            </div>

        </main>
    );
};

export default LodgingPage;
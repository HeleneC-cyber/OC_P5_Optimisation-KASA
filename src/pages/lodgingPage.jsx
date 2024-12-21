// Import des dépendances
import { useParams } from "react-router";

import TagList from '../components/tagList';
import lodgings from './../data/lodging.json';
import { useEffect, useState } from "react";


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
            <div>
                <h1>{lodgingItem.title}</h1>
                <p>{lodgingItem.location}</p>
                { lodgingItem.tags && <TagList key={id} tags={lodgingItem.tags} /> }
                
            </div>

        </main>
    );
};

export default LodgingPage;
import Banner from "../components/banner";
import Collapsible from "../components/collapsible";

import bannerAbout from './../assets/about.png';

import './../style/pages/_about.scss';



const About = () => {

    const aboutList = [
        {
            title:"Fiabilité",
            description:"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            title:"Respect",
            description:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            title:"Service",
            description:"La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
        },
        {
            title:"Sécurité",
            description:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        },
    ]


    return (
            <main>
                <Banner nameSrc={bannerAbout} nameAlt="vallée dans une chaine montagneuse" isEmpty />
                <div className="collapsible-container">
            {aboutList.map((aboutItem) =>
                <Collapsible key={aboutItem.title} title={aboutItem.title} description={aboutItem.description} />
            )}
                </div>
            </main>
    );
};

export default About;
// Import des dépendances
import PropTypes from 'prop-types';
// Import style
import './../style/components/_banner.scss';



const Banner = ({ nameSrc, nameAlt, title }) => {

    // Rendu du composant 
    return (
        <section className={title ? "banner-container" : "banner-container small-space"} >
            <img src={nameSrc} alt={nameAlt} />
            <div className={title ? "overlay-title" : "overlay-title small-opacity"}>
                {title && <h1>{title}</h1>}
            </div>
        </section>
    );
};

// Définition du type de props utilisées dans le composant
Banner.propTypes = {
    nameSrc: PropTypes.string.isRequired,
    nameAlt: PropTypes.string.isRequired,
    title: PropTypes.string
}

export default Banner;
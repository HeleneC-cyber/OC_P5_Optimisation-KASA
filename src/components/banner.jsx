// Import des dépendances
import PropTypes from 'prop-types';
// Import style
import './../style/components/_banner.scss';



const Banner = ({ nameSrc, nameAlt, isEmpty }) => {

    // Définition du type de props utilisées dans le composant
    Banner.propTypes = {
        nameSrc: PropTypes.string.isRequired,
        nameAlt: PropTypes.string.isRequired,
        // Si on précise que la valeur boléenne est requise (true/false) on doit préciser l'état du props, sinon par défaut : isEmpty=true si rien écrit=false
        isEmpty: PropTypes.bool,
      }

    // Rendu du composant 
    return (
        <section className={isEmpty ? "banner-container small-space" : "banner-container"} >
            <img src={nameSrc} alt={nameAlt} />
            <div className={isEmpty ? "overlay-title small-opacity" : "overlay-title"}>
                {!isEmpty && <h1>Chez vous, partout et ailleurs</h1>}
            </div>
        </section>
    );
};

export default Banner;
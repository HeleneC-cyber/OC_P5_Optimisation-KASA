// Import des dépendances
import PropTypes from 'prop-types';
// Import des composants
import starFull from "./../assets/star-full.svg"
import starEmpty from "./../assets/star-empty.svg"
// Import style
import './../style/components/_starsRating.scss';



const StarsRating = ({rating}) => {

    // Définit le nombre maximum d'étoile
    const maxStars = 5
    // Initialise un tableau de longueur maxStars (5) avec chaque élément inconnu (undefined) associé à un index (number)
    const stars = Array.from({ length: maxStars }, (_, index) =>
    // Opérateur conditionnel : Si index < rating (props, en string) (possibile ici grâce coercition automatique JS)
    // Alors ajout d'une liste comportant une image "étoile pleine"
    // Sinon ... "étoile vide"
    index < rating ? <li key={index}><img src={starFull} alt="étoile pleine" /></li> : <li key={index}><img src={starEmpty} alt="étoile vide" /></li>
    )
    
    // Rendu : Ajout dans le dom, d'une liste ul > li > img(étoile pleine ou vide)*5
    return (
        <ul className='stars'>
          {stars}  
        </ul>
    )
}

StarsRating.propTypes = {
    rating : PropTypes.string.isRequired
}

export default StarsRating;
import PropTypes from 'prop-types';

import starFull from "./../assets/star-full.svg"
import starEmpty from "./../assets/star-empty.svg"

import './../style/components/_starsRating.scss';


const StarsRating = ({rating}) => {

    StarsRating.propTypes = {
        rating : PropTypes.string.isRequired
    }

    const maxStars = 5
    const stars = Array.from({ length: maxStars }, (_, index) =>
    index < rating ? <li key={index}><img src={starFull} alt="étoile pleine" /></li> : <li key={index}><img src={starEmpty} alt="étoile vide" /></li>
    )

    return (
        <ul className='stars'>
          {stars}  
        </ul>
    )
}

export default StarsRating;
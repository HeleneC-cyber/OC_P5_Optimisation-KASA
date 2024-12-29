// Import des dépendances
import PropTypes from 'prop-types';
import { useState } from 'react';
// Import img
import sliderChevron from '../assets/slider-chevron.svg';
// Import style
import './../style/components/_slider.scss';


const Slider = ({ pictures, title }) => {

    // Initialise l'index pour savoir où on se situe dans le tableau
    const [index, setIndex] = useState(0) //Par défaut, la première image (avec index = 0) sera affichée

    const nextSlide = () => {
        // Vérifie si index + 1 ne dépasse pas la longueur du tableau
        // si oui on boucle, revient à la première image du tableau (index=0) 
        // sinon passe à l'image suivante du tableau (en ajoutant 1 à l'index)
        setIndex(index + 1 === pictures.length ? 0 : index + 1)
    }

    const prevSlide = () => {
        // Vérifie si index - 1 < à la première image du tableau (dépasse la borne inférieure)
        // si oui on boucle, revient à la dernière image du tableau (longueur du tableau = 1 car index commence à 0) 
        // sinon passe à l'image précédente du tableau (en retirant 1 à l'index)
        setIndex(index - 1 < 0 ? pictures.length - 1 : index - 1)
    }

    return (
            <div className="slider">
                {/* {pictures.length > 1 &&  } */}
                <div className="slides-container">
                    <div className="slide">
                        <img src={pictures[index]} alt={title} /> 
                    </div>
                    
                    {/* {pictures?.map((slide) => {
                        return(

                            <div className="slide" key={slide}>
                            <img src={slide} alt={title} />

                        </div>
                        )
                    })} */}

                </div>
                {pictures.length > 1 && 
                <>
                <img className="chevron-prev" onClick={prevSlide} src={sliderChevron} alt="chevron précédent" />
                <img className="chevron-next" onClick={nextSlide} src={sliderChevron} alt="chevron suivant" />
                <p className="counter" >{index + 1}/{pictures.length} </p>
                </>}
            </div>
    );
};

Slider.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired
}

export default Slider;
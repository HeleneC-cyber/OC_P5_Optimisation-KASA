// Import des dépendances
import { useState } from "react";
import PropTypes from 'prop-types';

import chevron from '../assets/chevron.svg';

import './../style/components/_collapsible.scss';


const Collapsible = ({ title, description }) => {

    Collapsible.propTypes = {
        title: PropTypes.string.isRequired,
        // La description accepte : string ou array
        description: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string)
        ]).isRequired

    }

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="title-desc-container">
            <button onClick={() => setIsOpen(!isOpen)}>
                    {title}
                <img className={isOpen ? "chevron-down" : ""} src={chevron} alt="chevron" />
            </button>

                <div className={`description ${isOpen ? "open" : "closed"}`}>
                {Array.isArray(description)
                        // Affiche chaque élément du tableau
                        ? description.map((item) => <p key={item}>{item}</p>) 
                        // Affiche la description si c'est une string
                        : description 
                    }</div>
        </div>
    );
};

export default Collapsible;
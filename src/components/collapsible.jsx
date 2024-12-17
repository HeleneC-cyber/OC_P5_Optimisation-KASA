// Import des dépendances
import { useState } from "react";
import PropTypes from 'prop-types';

import chevron from '../assets/chevron.svg';

import './../style/components/_collapsible.scss';


const Collapsible = ({ title, description }) => {

    Collapsible.propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,

    }

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="title-desc-container">
            <button onClick={() => setIsOpen(!isOpen)}>
                    {title}
                <img className={isOpen ? "chevron-down" : ""} src={chevron} alt="chevron" />
            </button>
            {isOpen &&
                <div className="description">{description}</div>
            }
        </div>
    );
};

export default Collapsible;
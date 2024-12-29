// Import des dépendances
import PropTypes from 'prop-types';
import { Link } from 'react-router';
// Import du style
import './../style/components/_card.scss';



const Card = ({ title, id, cover }) => {

    return (
        <Link to={`/lodgings/${id}`}>

            <article className='card'>
                <img src={cover} alt={title} />
                <div className="overlay-card">
                    <h2>{title}</h2>
                </div>
            </article>
        </Link>
    );
};

// Définition du type de props utilisées dans le composant
Card.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
}

export default Card;
// Import des dépendances
import PropTypes from 'prop-types';
// Import style
import './../style/components/_tagList.scss';



const TagList = ({ tags }) => {

    return (
        <ul className='tags'>
            {tags.map((tag) =>
                <li key={tag} className='tag'>{tag}</li>

            )}
        </ul>
    );
};

TagList.propTypes = {
    tags: PropTypes.array.isRequired
}

export default TagList;
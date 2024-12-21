import PropTypes from 'prop-types';
// import lodgings from './../data/lodging.json';
import './../style/components/_tagList.scss';


const TagList = ({ tags }) => {
    TagList.propTypes = {
        tags: PropTypes.array.isRequired

    }

    return (
        <ul className='tags'>
            {tags.map((tag) =>
                <li key={tag} className='tag'>{tag}</li>

            )}
        </ul>
    );
};

export default TagList;
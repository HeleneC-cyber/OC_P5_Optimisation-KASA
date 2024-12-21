import PropTypes from 'prop-types';
// import lodgings from './../data/lodging.json';


const TagList = ({ tags }) => {
    TagList.propTypes = {
        tags: PropTypes.array.isRequired

    }

    return (
        <ul>
{tags.map((tag) =>
        <li key={tag} className='tag'>{tag}</li>

)}
        </ul>
    );
};

export default TagList;
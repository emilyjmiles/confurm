import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './PetCard.css';

const PetCard = ({ id, image, name }) => {
  return (
    <Link to={ `/${name}-${id}` } className='single-pet-card'>
      <img className='pet-image' src={ image } alt={ `${name}` } />
      <h2>{ name }</h2>
    </Link>
  );
};

export default PetCard;

PetCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
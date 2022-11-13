import { Link } from 'react-router-dom';
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
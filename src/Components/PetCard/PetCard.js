import './PetCard.css';

const PetCard = ({ id, image, name }) => {
  return (
    <section className='single-pet-card'>
      <img className='pet-image' src={ image } alt={ `${name} profile picture` } width='500px' />
      <h2>{ name }</h2>
    </section>
  );
};

export default PetCard;
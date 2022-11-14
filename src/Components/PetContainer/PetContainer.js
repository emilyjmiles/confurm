import PropTypes from 'prop-types';

import './PetContainer.css';
import PetCard from '../PetCard/PetCard';

const PetContainer = ({ patients }) => {
  const petCards = patients.map(patient => {
    return (
      <PetCard
        key={ patient.id }
        id={ patient.id }
        image={ patient.image }
        name={ patient.name }
      />
    );
  });


  return (
    <section className='all-pets'>
      { petCards }
    </section>
  );
};

export default PetContainer;

PetContainer.propTypes = {
  patients: PropTypes.array.isRequired
};
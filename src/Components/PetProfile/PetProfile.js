import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './PetProfile.css';

const PetProfile = ({ petData, error }) => {
  const getMeds = petData.medHx.meds.map(med => {
    return (
      <div key={ med.name + Date.now() }>
        <p>Medication: { med.name } { med.strength }</p>
        <p>Instructions: { med.instructions }</p>
        { petData.medHx.meds.length > 1 && <hr></hr> }
      </div>
    );
  });

  const getLastWt = petData.medHx.weight.slice(-1);

  return (
    <section className='pet-profile'>
      <div className='profile-container'>
        { error && <h1>Oh no! Something went wrong while fetching your information.</h1> }
        <img className='profile-image' src={ petData.image } alt={ `${petData.name}` } width="600px" height="600px" />
        <div className='details-container'>
          <div className='pet-details'>
            <div className='details-header'>
              <h1>{ petData.name }</h1>
              <h3>Last Weight: { getLastWt } lbs</h3>
            </div>
            <h3>Reminders:</h3>
            <p></p>
            <h3>Prescriptions:</h3>
            { getMeds }
          </div>
          <div className='button-container'>
            <Link to='/request-form'>
              <button>Request Appointment</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetProfile;

PetProfile.propTypes = {
  petData: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    DOB: PropTypes.string,
    breed: PropTypes.string,
    color: PropTypes.string,
    sex: PropTypes.string,
    medHx: PropTypes.object,
    weight: PropTypes.array,
    meds: PropTypes.array,
    notes: PropTypes.array
  })
};

import { Link } from 'react-router-dom';
import './PetProfile.css';

const PetProfile = ({ petData }) => {
  console.log(petData);
  const getMeds = petData.medHx.meds.map(med => {
    return (
      <div key={ Date.now() }>
        <p>Medication: { med.name } { med.strength }</p>
        <p>Instructions: { med.instructions }</p>
        { petData.medHx.meds.length > 1 && <hr></hr> }
      </div>
    );
  });

  const getLastWt = petData.medHx.weight.reverse();

  console.log(getLastWt[0]);
  return (
    <section className='pet-profile'>
      <div className='profile-container'>
        <img className='profile-image' src={ petData.image } alt={ `${petData.name}` } width="600px" height="600px" />
        <div className='details-container'>
          <div className='pet-details'>
            <div className='details-header'>
              <h1>{ petData.name }</h1>
              <h3>Last Weight: { getLastWt[0] }</h3>
            </div>
            <h3>Reminders:</h3>
            <p></p>
            <h3>Precriptions:</h3>
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
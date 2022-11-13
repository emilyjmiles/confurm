import { Link } from 'react-router-dom';
import './PetProfile.css';

const PetProfile = ({ petData }) => {
  return (
    <section className='pet-profile'>
      <div className='profile-container'>
        <img className='profile-image' src={ petData.image } alt={ `${petData.name}` } />
        <div className='details-container'>
          <div className='pet-details'>
            <h1>{ petData.name }</h1>
            <p></p>
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
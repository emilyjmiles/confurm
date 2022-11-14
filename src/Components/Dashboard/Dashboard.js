import PropTypes from 'prop-types';

import './Dashboard.css';
import PetContainer from '../PetContainer/PetContainer';
import Reminders from '../Reminders/Reminders';


const Dashboard = ({ randomUser, patients, appointments }) => {
  if (!randomUser) {
    return (
      <p>Loading...</p>
    );
  }

  const matchPatients = randomUser.pets.reduce((userPets, pet) => {
    patients.forEach(patient => {
      if (pet.petId === patient.id) {
        userPets.push(patient);
      };
    });

    return userPets;
  }, []);

  const findAppts = appointments.filter(appt => appt.userName === randomUser.name);

  return (
    <section className='dashboard'>
      <Reminders patients={ matchPatients } appointments={ findAppts } />
      <PetContainer patients={ matchPatients } />
    </section>
  );
};

export default Dashboard;

Dashboard.propTypes = {
  randomUser: PropTypes.shape({
    userId: PropTypes.number,
    name: PropTypes.string,
    address: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    pets: PropTypes.array.isRequired,
  }),
  patients: PropTypes.array.isRequired,
  appointments: PropTypes.array.isRequired,
};
import './Dashboard.css';
import PetContainer from '../PetContainer/PetContainer';
import Reminders from '../Reminders/Reminders';


const Dashboard = ({ users, patients }) => {
  const matchPatients = users.reduce((userPets, user) => {
    user.pets.forEach(pet => {
      patients.forEach(patient => {
        if (pet.petId === patient.id) {
          userPets.push(patient);
        };
      });
    });

    return userPets;
  }, []);

  return (
    <section className='dashboard'>
      <Reminders patients={ matchPatients } />
      <PetContainer patients={ matchPatients } />
    </section>
  );
};

export default Dashboard;
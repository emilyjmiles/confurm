import './Dashboard.css';
import PetContainer from '../PetContainer/PetContainer';
import Reminders from '../Reminders/Reminders';


const Dashboard = ({ patients }) => {
  return (
    <section className='dashboard'>
      <Reminders patients={ patients } />
      <PetContainer patients={ patients } />
    </section>
  );
};

export default Dashboard;
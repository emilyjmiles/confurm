import { useState, useEffect } from 'react';
import './Dashboard.css';
import PetContainer from '../PetContainer/PetContainer';
import Reminders from '../Reminders/Reminders';


const Dashboard = ({ users }) => {
  return (
    <section className='dashboard'>
      <Reminders users={ users } />
      <PetContainer users={ users } />
    </section>
  );
};

export default Dashboard;
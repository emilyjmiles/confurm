import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { fetchUsers, fetchPatients, fetchApptRequests } from '../../apiCalls';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import PetProfile from '../PetProfile/PetProfile';
import RequestForm from '../RequestForm/RequestForm';
import Footer from '../Footer/Footer';

const App = () => {
  const [users, setUsers] = useState([]);
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then(data => setUsers(data.users));
    fetchPatients()
      .then(data => setPatients(data.patients));
    fetchApptRequests()
      .then(data => setAppointments(data.appointments));
  }, []);

  const setRandomUser = users[Math.floor(Math.random() * users.length)];

  return (
    <main className='app-container'>
      <Header randomUser={ setRandomUser } />
      <Switch>
        <Route
          exact path='/'
          render={ () => <Dashboard randomUser={ setRandomUser } patients={ patients } appointments={ appointments } /> }
        />
        <Route
          exact path='/request-form'
          render={ () => <RequestForm /> }
        />
        <Route
          path='/:name-:id'
          render={ ({ match }) => {
            const findPet = patients.find(patient => patient.id === parseInt(match.params.id));
            return <PetProfile petData={ findPet } />;
          } }
        />
      </Switch>
      <Footer />
    </main>
  );
};

export default App;

import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import { fetchUsers, fetchPatients, fetchApptRequests } from '../../apiCalls';

import './App.css';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import PetProfile from '../PetProfile/PetProfile';
import RequestForm from '../RequestForm/RequestForm';
import Footer from '../Footer/Footer';

const App = () => {
  const [users, setUsers] = useState([]);
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then(data => setUsers(data.users))
      .catch(error => setError(error));

    fetchPatients()
      .then(data => setPatients(data.patients))
      .catch(error => setError(error));

    fetchApptRequests()
      .then(data => setAppointments(data.appointments))
      .catch(error => setError(error));
  }, []);

  if (!users || !patients || !appointments) {
    setLoading(true);
  }

  const setRandomUser = users[Math.floor(Math.random() * users.length)];

  return (
    <main className='app-container'>
      <Header randomUser={ setRandomUser } />
      { loading && <h1>Please be patient while we retreive your information!</h1> }
      { error && <h1>Oh no! Something went wrong while fetching your information.</h1> }
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
            return <PetProfile petData={ findPet } loading={ loading } error={ error } />;
          } }
        />
      </Switch>
      <Footer />
    </main>
  );
};

export default App;
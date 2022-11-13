import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { fetchUsers, fetchPatients } from '../../apiCalls';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import PetProfile from '../PetProfile/PetProfile';
import RequestForm from '../RequestForm/RequestForm';
import Footer from '../Footer/Footer';

const App = () => {
  const [users, setUsers] = useState([]);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then(data => setUsers(data.users));
    fetchPatients()
      .then(data => setPatients(data.patients));
  }, []);

  return (
    <main className='app-container'>
      <Header users={ users } />
      <Switch>
        <Route
          exact path='/'
          render={ () => <Dashboard patients={ patients } /> }
        />
        <Route
          path='/:name-:id'
          render={ ({ match }) => {
            const findPet = patients.find(patient => patient.id === parseInt(match.params.id));
            return <PetProfile petData={ findPet } />;
          } }
        />
        <Route
          path='/request-form'
          render={ () => <RequestForm /> }
        />
      </Switch>
      <Footer />
    </main>
  );
};

export default App;

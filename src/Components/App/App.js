import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { fetchUsers } from '../../apiCalls';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then(data => setUsers(data.users));
  }, []);

  return (
    <main className='app-container'>
      <Header users={ users } />
      <Dashboard users={ users } />
      <Footer />
    </main>
  );
};

export default App;

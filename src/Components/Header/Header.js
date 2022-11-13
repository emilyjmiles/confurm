import './Header.css';
import logo from '../../assets/confurm-logo.png';
import { Link } from 'react-router-dom';

const Header = ({ users }) => {
  if (!users.length) {
    return (
      <p>Loading...</p>
    );
  }
  const setRandomUser = users[Math.floor(Math.random() * users.length)];
  return (
    <header className='header'>
      <Link to='/' >
        <img className='logo' src={ logo } alt='confurm logo' />
      </Link>
      <h1>{ `Hi ${setRandomUser.name.split(' ')[0]}!` }</h1>
    </header>
  );
};

export default Header;
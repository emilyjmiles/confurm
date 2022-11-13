import './Header.css';
import logo from '../../assets/confurm-logo.png';
import { Link } from 'react-router-dom';

const Header = ({ randomUser }) => {
  if (!randomUser) {
    return (
      <p>Loading...</p>
    );
  }
  return (
    <header className='header'>
      <Link to='/' >
        <img className='logo' src={ logo } alt='confurm logo' />
      </Link>
      <h1>{ `Hi ${randomUser.name.split(' ')[0]}!` }</h1>
    </header>
  );
};

export default Header;
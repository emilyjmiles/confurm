import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.css';
import logo from '../../assets/confurm-logo.png';

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

Header.propTypes = {
  randomUser: PropTypes.shape({
    userId: PropTypes.number,
    name: PropTypes.string.isRequired,
    address: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    pets: PropTypes.array,
  }),
};
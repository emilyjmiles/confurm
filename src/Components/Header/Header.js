import './Header.css';
import logo from '../../assets/confurm-logo.png';

const Header = ({ users }) => {
  const getUser = users.map(user => user.name);

  return (
    <header className='header'>
      <img className='logo' src={ logo } alt='confurm logo' />
      <h1>{ `Welcome Back, ${getUser[0]}!` }</h1>
    </header>
  );
};

export default Header;
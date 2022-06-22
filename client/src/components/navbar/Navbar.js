import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ children }) {
  return (
    <nav className='Navbar'>
      <Link to='/' className='navbar-container'>
        <div className='logo-container'>
          <div className='kiwi-image'></div>
          <span className='fly-logo-text'>Fly</span>
          <span className='kiwi-logo-text'>Kiwi</span>
        </div>
        {children}
      </Link>
    </nav>
  );
}

export default Navbar;

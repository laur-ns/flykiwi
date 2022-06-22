import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ children }) {
  return (
    <nav className='Navbar'>
      <div className='navbar-container'>
        <Link to='/' className='logo-container'>
          <div className='kiwi-image'></div>
          <span className='fly-logo-text'>Fly</span>
          <span className='kiwi-logo-text'>Kiwi</span>
        </Link>
        {children}
      </div>
    </nav>
  );
}

export default Navbar;

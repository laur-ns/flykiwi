import './Navbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../App';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useState } from 'react';

function Navbar({ children }) {
  const { isAuthenticated, setAuthenticated } = useContext(AuthContext);
  const [username, setUsername] = useState('');

  function handleLogoutClick(e) {
    localStorage.removeItem('token');
    toast.success('Logout successful');
    setAuthenticated(false);
  }

  async function getName() {
    try {
      const response = await fetch('http://localhost:8000/api/user', {
        method: 'GET',
        headers: {
          token: localStorage.token,
          'Content-Type': 'application/json',
        },
      });
      const parsedResponse = await response.json();
      setUsername(parsedResponse);
    } catch (e) {
      console.error(e.message);
    }
  }
  useEffect(() => {
    if (isAuthenticated) {
      getName();
    }
  }, [isAuthenticated]);

  return (
    <nav className='Navbar'>
      <div className='navbar-container'>
        <Link to='/' className='logo-container'>
          <div className='kiwi-image'></div>
          <span className='fly-logo-text'>Fly</span>
          <span className='kiwi-logo-text'>Kiwi</span>
        </Link>
        {isAuthenticated ? (
          <div className='navbar__user-options'>
            <span>{username}</span>|
            <div className='navbar__logout' onClick={handleLogoutClick}>
              Logout
              <div className='navbar__logout-icon'></div>
            </div>
          </div>
        ) : (
          <div className='nav-buttons'>
            <Link to='/about' className='about-nav'>
              about
            </Link>
            <Link to='/login' className='login-nav'>
              Login
            </Link>
          </div>
        )}
        {children}
      </div>
    </nav>
  );
}

export default Navbar;

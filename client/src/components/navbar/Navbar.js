import './Navbar.css';

function Navbar({ children }) {
  return (
    <nav className='Navbar'>
      <a href='/' className='navbar-container'>
        <div className='logo-container'>
          <div className='kiwi-image'></div>
          <span className='fly-logo-text'>Fly</span>
          <span className='kiwi-logo-text'>Kiwi</span>
        </div>
        {children}
      </a>
    </nav>
  );
}

export default Navbar;

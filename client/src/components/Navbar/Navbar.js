import './Navbar.css';

function Navbar({ children }) {
  return (
    <nav className='Navbar'>
      <div className='navbar-container'>
        <div className='logo-container'>
          <div className='kiwi-image'></div>
          <span className='fly-logo-text'>Fly</span>
          <span className='kiwi-logo-text'>Kiwi</span>
        </div>
        {children}
      </div>
    </nav>
  );
}

export default Navbar;

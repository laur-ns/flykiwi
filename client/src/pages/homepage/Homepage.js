import './Homepage.css';
import Navbar from '../../components/Navbar/Navbar';

function Homepage() {
  return (
    <div className='Homepage'>
      <Navbar>
        <div className='nav-buttons'>
          <button className='about-nav'>about</button>
          <button className='login-nav'>Login</button>
        </div>
      </Navbar>
    </div>
  );
}

export default Homepage;

import './Homepage.css';
import Navbar from '../../components/navbar/Navbar';
import HomepageForm from '../../components/homepage-form/HomepageForm';
import homePhoto from './hero-img.jpg';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

function Homepage({ setAuth }) {
  return (
    <div className='Homepage'>
      <Navbar>
        <div className='nav-buttons'>
          <Link to='/about' className='about-nav'>
            about
          </Link>
          <Link to='/login' className='login-nav'>
            Login
          </Link>
        </div>
      </Navbar>
      <main>
        <div className='main-container'>
          <img src={homePhoto} alt='Homepage' className='hero-image' />
          <HomepageForm setAuth={setAuth} className='.signup-form-wrapper' />
          <h1 className='slogan'>
            <span>Fly</span> with class.
          </h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;

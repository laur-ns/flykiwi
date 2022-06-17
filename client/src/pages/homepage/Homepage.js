import './Homepage.css';
import Navbar from '../../components/navbar/Navbar';
import SignupForm from '../../components/signup-form/SignupForm';
import homePhoto from './hero-img.jpg';
import Footer from '../../components/footer/Footer';

function Homepage() {
  return (
    <div className='Homepage'>
      <Navbar>
        <div className='nav-buttons'>
          <button className='about-nav'>about</button>
          <button className='login-nav'>Login</button>
        </div>
      </Navbar>
      <main>
        <div className='main-container'>
          <img src={homePhoto} alt='Homepage' className='hero-image' />
          <SignupForm className='.signup-form-wrapper' />
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

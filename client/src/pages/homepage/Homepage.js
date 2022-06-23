import './Homepage.css';
import Navbar from '../../components/navbar/Navbar';
import HomepageForm from '../../components/homepage-form/HomepageForm';
import homePhoto from './hero-img.jpg';
import Footer from '../../components/footer/Footer';

function Homepage({ setAuth }) {
  return (
    <div className='Homepage'>
      <Navbar></Navbar>
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

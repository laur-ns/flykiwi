import './Signup.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import spinner from '../../assets/loading-spinner.svg';
import { useState } from 'react';

function Signup() {
  const [isDisabled, setDisabled] = useState(false);
  async function test() {
    return new Promise(() => {
      setTimeout(() => {
        setDisabled(false);
      }, 3000);
    });
  }
  async function handleSignupSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    await test();
  }
  return (
    <div className='Signup'>
      <Navbar />
      <main>
        <form action='' method='post' onSubmit={handleSignupSubmit}>
          <div className='Signup__inputs-wrapper'>
            <label htmlFor='username-Signup' className='Signup__username-label'>
              Username
            </label>
            <input type='text' name='username-Signup' id='username-Signup' />
            <div className='Signup__input-wrapper'>
              <label
                htmlFor='password-Signup'
                className='Signup__password-label'
              >
                Password
              </label>
              <input
                type='password'
                name='password-Signup'
                id='password-Signup'
              />
            </div>
            <div className='Signup__input-wrapper'>
              <label
                htmlFor='password-Signup'
                className='Signup__password-label'
              >
                Confirm password
              </label>
              <input
                type='password'
                name='password-Signup'
                id='password-Signup'
              />
            </div>
          </div>
          <div className='Signup__Signup-button-wrapper'>
            {isDisabled ? (
              <button type='submit' className='Signup__Signup-button' disabled>
                <img src={spinner} alt='loading' className='loading-spinner' />
              </button>
            ) : (
              <button type='submit' className='Signup__Signup-button'>
                Sign up
              </button>
            )}
          </div>
          <div className='Signup__signup-option'>
            already have an account? <a href='/login'>login</a>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Signup;

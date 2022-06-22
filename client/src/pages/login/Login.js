import './Login.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import spinner from '../../assets/loading-spinner.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ setAuth }) {
  const [isDisabled, setDisabled] = useState(false);
  async function test() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setAuth(true);
        setDisabled(false);
      }, 3000);
    });
  }
  async function handleLoginSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    await test();
  }
  return (
    <div className='Login'>
      <Navbar />
      <main>
        <form action='' method='post' onSubmit={handleLoginSubmit}>
          <div className='Login__inputs-wrapper'>
            <label htmlFor='username-login' className='Login__username-label'>
              Username
            </label>
            <input type='text' name='username-login' id='username-login' />
            <div className='Login__input-wrapper'>
              <label htmlFor='password-login' className='Login__password-label'>
                Password
              </label>
              <input
                type='password'
                name='password-login'
                id='password-login'
              />
            </div>
          </div>
          <div className='Login__login-button-wrapper'>
            {isDisabled ? (
              <button type='submit' className='Login__login-button' disabled>
                <img src={spinner} alt='loading' className='loading-spinner' />
              </button>
            ) : (
              <button type='submit' className='Login__login-button'>
                Login
              </button>
            )}
          </div>
          <div className='Login__signup-option'>
            don't have an account? <Link to='/signup'>signup</Link>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Login;

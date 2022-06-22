import './Signup.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import spinner from '../../assets/loading-spinner.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup({ setAuth }) {
  const [isDisabled, setDisabled] = useState(false);
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const { username, password, confirmPassword } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  async function test() {
    return new Promise(() => {
      setTimeout(() => {
        setDisabled(false);
      }, 3000);
    });
  }

  async function handleSignupSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    }
    try {
      const body = { username, password };

      const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const parseResponse = await response.json();

      console.log(parseResponse);

      setDisabled(true);
      await test();
    } catch (e) {
      console.log(e.message);
    }
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
            <input
              type='text'
              name='username'
              id='username-Signup'
              value={username}
              onChange={onChange}
              required
            />
            <div className='Signup__input-wrapper'>
              <label
                htmlFor='password-Signup'
                className='Signup__password-label'
              >
                Password
              </label>
              <input
                type='password'
                name='password'
                id='password-Signup'
                value={password}
                onChange={onChange}
                required
              />
            </div>
            <div className='Signup__input-wrapper'>
              <label
                htmlFor='confirm-password'
                className='Signup__password-label'
              >
                Confirm password
              </label>
              <input
                type='password'
                name='confirmPassword'
                id='confirm-password'
                value={confirmPassword}
                onChange={onChange}
                required
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
            already have an account? <Link to='/login'>login</Link>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Signup;

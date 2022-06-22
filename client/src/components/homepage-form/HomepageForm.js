import { useState } from 'react';
import './HomepageForm.css';
import spinner from '../../assets/loading-spinner.svg';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function SignupForm({ setAuth }) {
  const [isDisabled, setDisabled] = useState(false);
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const { username, password, confirmPassword } = inputs;

  async function handleSignupSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      setDisabled(false);
      return;
    }

    try {
      const body = { username, password };
      const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const parsedResponse = await response.json();

      if (parsedResponse.token) {
        localStorage.setItem('token', parsedResponse.token);
        setAuth(true);
        toast.success('Account created');
      } else {
        setAuth(false);
        toast.error(parsedResponse);
      }
      setDisabled(false);
    } catch (e) {
      console.log(e.message);
    }
  }

  function onChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className='SignupForm'>
      <form action='' method='post' onSubmit={handleSignupSubmit}>
        <label htmlFor='username-signup' className='username-label'>
          Username
        </label>
        <input
          type='text'
          name='username'
          id='username-signup'
          value={username}
          onChange={onChange}
          required
        />
        <div className='signup-password-area'>
          <div className='input-wrapper'>
            <label htmlFor='password-signup' className='password-label'>
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password-signup'
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='confirm-signup' className='confirm-label'>
              Confirm password
            </label>
            <input
              type='password'
              name='confirmPassword'
              id='confirm-signup'
              value={confirmPassword}
              onChange={onChange}
              required
            />
          </div>
        </div>
        {isDisabled ? (
          <button type='submit' className='submit-signup' disabled>
            <img
              src={spinner}
              alt='loading'
              className='loading-spinner--homepage'
            />
          </button>
        ) : (
          <button type='submit' className='submit-signup '>
            Sign up
          </button>
        )}
      </form>
      <div className='login-option'>
        already have an account? <Link to='/login'>login</Link>
      </div>
    </div>
  );
}

export default SignupForm;

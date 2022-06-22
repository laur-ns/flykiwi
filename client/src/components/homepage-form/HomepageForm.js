import { useState } from 'react';
import './HomepageForm.css';
import spinner from '../../assets/loading-spinner.svg';

function SignupForm() {
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
    <div className='SignupForm'>
      <form action='' method='post' onSubmit={handleSignupSubmit}>
        <label htmlFor='username-signup' className='username-label'>
          Username
        </label>
        <input type='text' name='username-signup' id='username-signup' />
        <div className='signup-password-area'>
          <div className='input-wrapper'>
            <label htmlFor='password-signup' className='password-label'>
              Password
            </label>
            <input
              type='password'
              name='password-signup'
              id='password-signup'
            />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='confirm-signup' className='confirm-label'>
              Confirm password
            </label>
            <input type='password' name='confirm-signup' id='confirm-signup' />
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
        already have an account? <a href='/login'>login</a>
      </div>
    </div>
  );
}

export default SignupForm;

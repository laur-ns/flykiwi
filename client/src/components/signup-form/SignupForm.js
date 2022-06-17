import './SignupForm.css';

function SignupForm() {
  return (
    <div className='SignupForm'>
      <form action='' method='post'>
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
        <button type='submit' className='submit-signup'>
          Sign up
        </button>
      </form>
      <div className='login-option'>
        already have an account? <a href='/'>login</a>
      </div>
    </div>
  );
}

export default SignupForm;

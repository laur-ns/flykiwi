import './Login.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import spinner from '../../assets/loading-spinner.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login({ setAuth }) {
  const [isDisabled, setDisabled] = useState(false);
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const { username, password } = inputs;

  async function handleLoginSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    try {
      const body = { username, password };
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const parsedResponse = await response.json();

      if (parsedResponse.token) {
        // if token exists
        localStorage.setItem('token', parsedResponse.token);
        toast.success('Login successful');
        setAuth(true);
      } else {
        setAuth(false);
        toast.error(parsedResponse);
      }

      setDisabled(false);
    } catch (e) {
      console.log(e.message);
    }
  }

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <div className='Login'>
      <Navbar />
      <main>
        <form action='' method='post' onSubmit={handleLoginSubmit}>
          <div className='Login__inputs-wrapper'>
            <label htmlFor='username-login' className='Login__username-label'>
              Username
            </label>
            <input
              type='text'
              name='username'
              id='username-login'
              required
              value={username}
              onChange={onChange}
            />
            <div className='Login__input-wrapper'>
              <label htmlFor='password-login' className='Login__password-label'>
                Password
              </label>
              <input
                type='password'
                name='password'
                id='password-login'
                required
                value={password}
                onChange={onChange}
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

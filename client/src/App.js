import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ManageBookings from './pages/manage-bookings/ManageBookings';
import './App.css';
import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const setAuth = (bool) => {
    setAuthenticated(bool);
  };

  useEffect(() => {
    isAuth();
  });

  async function isAuth() {
    try {
      const response = await fetch('http://localhost:8000/auth/verify', {
        method: 'GET',
        headers: { token: localStorage.token },
      });

      const parsedResponse = await response.json();
      parsedResponse === true
        ? setAuthenticated(true)
        : setAuthenticated(false);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path='/'
          element={
            !isAuthenticated ? (
              <Homepage setAuth={setAuth} />
            ) : (
              <Navigate to='/managebookings' replace={true} />
            )
          }
        />
        <Route
          exact
          path='/login'
          element={
            !isAuthenticated ? (
              <Login setAuth={setAuth} />
            ) : (
              <Navigate to='/managebookings' replace={true} />
            )
          }
        />
        <Route
          exact
          path='/signup'
          element={
            !isAuthenticated ? (
              <Signup setAuth={setAuth} />
            ) : (
              <Navigate to='/managebookings' replace={true} />
            )
          }
        />
        <Route
          exact
          path='/managebookings'
          element={
            isAuthenticated ? (
              <ManageBookings setAuth={setAuth} />
            ) : (
              <Navigate to='/login' replace={true} />
            )
          }
        />
      </Routes>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
}

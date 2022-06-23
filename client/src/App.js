import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ManageBookings from './pages/manage-bookings/ManageBookings';
import './App.css';
import { useState, useEffect, createContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import BookFlight from './pages/bookflight/BookFlight';

const AuthContext = createContext();
alert(
  'This assignment is incomplete (i ran out of time).\nThe backend is about 95% complete, the frontend is about 60%.\nUnfortunately the only way to demo this project right now is to make manual API calls to the backend.\nThe route.ts file contains all the routes to do this.\n - Laurens M'
);

export default function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    isAuth();
  });

  const setAuth = (bool) => {
    setAuthenticated(bool);
  };

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
      <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
        <Routes isAuthenticated={{ isAuthenticated, setAuthenticated }}>
          <Route
            exact
            path='/'
            element={
              !isAuthenticated ? (
                <Homepage setAuth={setAuth} />
              ) : (
                <Navigate to='/bookflights' replace={true} />
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
                <Navigate to='/bookflights' replace={true} />
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
          <Route
            exact
            path='/bookflights'
            element={
              isAuthenticated ? (
                <BookFlight setAuth={setAuth} />
              ) : (
                <Navigate to='/login' replace={true} />
              )
            }
          />
        </Routes>
        <ToastContainer
          position='top-center'
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export { AuthContext };

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ManageBookings from './pages/manage-bookings/ManageBookings';
import './App.css';
import { useState } from 'react';

export default function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const setAuth = (bool) => {
    setAuthenticated(bool);
  };

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
              <Signup />
            ) : (
              <Navigate to='/login' replace={true} />
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
    </BrowserRouter>
  );
}

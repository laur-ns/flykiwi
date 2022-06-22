import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ManageBookings from './pages/manage-bookings/ManageBookings';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/managebookings' element={<ManageBookings />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

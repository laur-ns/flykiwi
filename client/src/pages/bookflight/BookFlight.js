import './BookFlight.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Navpanel from '../../components/navpanel/Navpanel';
import FlightCard from '../../components/flightcard/FlightCard';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import spinner from '../../assets/loading-spinner.svg';
import Select from 'react-select';

const customStyles = {
  container: (provided) => ({
    ...provided,
    background: 'none',
    'font-family': 'fira-sans',
  }),
  input: (provided) => ({
    ...provided,
    padding: '2rem 1rem 1rem 1rem',
    background: 'none',
  }),
  control: (provided) => ({
    ...provided,
    background: 'none',
    border: '0.13rem solid #abbbf8',
  }),
  label: (provided) => ({
    ...provided,
    'font-family': 'source-serif-sb',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#bec8ee',
    'font-size': '1.3rem',
    margin: '0.5rem 0 0 1rem',
  }),
};

const options = [
  { value: 'dairyFlat', label: 'Dairy Flat' },
  { value: 'sydney', label: 'Sydney' },
  { value: 'rotorua', label: 'Rotorua' },
  { value: 'greatBarrierIsland', label: 'Great Barrier Island' },
  { value: 'chathamIslands', label: 'Chatham Islands' },
  { value: 'lakeTekapo', label: 'Lake Tekapo' },
];

function BookFlight() {
  const [isDisabled, setDisabled] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (e) => {
    setDisabled(true);
  };
  return (
    <div className='BookFlight'>
      <div className='manage__nav'>
        <Navbar></Navbar>
        <Navpanel activePanel={1} />
      </div>
      <main>
        <div className='BookFlight__main-wrapper'>
          <form action='POST' onSubmit={handleSubmit}>
            <div className='BookFlight__from-wrapper'>
              <label htmlFor='BookFlight__from'>From</label>
              <Select
                styles={customStyles}
                options={options}
                type='text'
                id='BookFlight__from'
                placeholder=''
              />
            </div>
            <div className='BookFlight__to-wrapper'>
              <label htmlFor='BookFlight__to'>To</label>
              <Select
                styles={customStyles}
                options={options}
                type='text'
                id='BookFlight__to'
                placeholder=''
              />
            </div>
            <div className='switch-wrapper'>
              <div className='BookFlight__switch-button'></div>
            </div>
            <div className='date-picker-wrapper'>
              <label htmlFor='BookFlight__date'>Date</label>
              <DatePicker
                id='BookFlight__date'
                className='BookFlight__datepicker'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </form>
          <div className='BookFlight__btn-wrapper'>
            {isDisabled ? (
              <button className='BookFlight__submit' disabled>
                <img src={spinner} alt='loading' className='loading-spinner' />
              </button>
            ) : (
              <button className='BookFlight__submit' onClick={handleSubmit}>
                Search
              </button>
            )}
          </div>
        </div>
        <div className='BookFlight__cards'></div>
      </main>
      <Footer />
    </div>
  );
}

export default BookFlight;

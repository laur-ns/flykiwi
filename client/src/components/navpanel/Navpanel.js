import './Navpanel.css';

function Navpanel({ activePanel }) {
  return (
    <div className='Navpanel'>
      <div className='Navpanel__container'>
        <a
          href='/bookflight'
          className={`Navpanel__link ${activePanel === 1 && 'active'}`}
        >
          Book a flight
        </a>
        <a
          href='/managebooking'
          className={`Navpanel__link ${activePanel === 2 && 'active'}`}
        >
          Manage bookings
        </a>
        <a
          href='/manageusers'
          className={`Navpanel__link ${activePanel === 3 && 'active'}`}
        >
          Manage users
        </a>
      </div>
    </div>
  );
}

export default Navpanel;

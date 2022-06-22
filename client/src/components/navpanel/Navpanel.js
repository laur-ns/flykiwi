import { Link } from 'react-router-dom';
import './Navpanel.css';

function Navpanel({ activePanel }) {
  return (
    <div className='Navpanel'>
      <div className='Navpanel__container'>
        <Link
          to='/bookflight'
          className={`Navpanel__link ${activePanel === 1 && 'active'}`}
        >
          Book a flight
        </Link>
        <Link
          to='/managebooking'
          className={`Navpanel__link ${activePanel === 2 && 'active'}`}
        >
          Manage bookings
        </Link>
        <Link
          to='/manageusers'
          className={`Navpanel__link ${activePanel === 3 && 'active'}`}
        >
          Manage users
        </Link>
      </div>
    </div>
  );
}

export default Navpanel;

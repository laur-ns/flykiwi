import './ManageBookings.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Navpanel from '../../components/navpanel/Navpanel';
import FlightCard from '../../components/flightcard/FlightCard';

function ManageBookings() {
  return (
    <div className='ManageBookings'>
      <div className='manage__nav'>
        <Navbar />
        <Navpanel activePanel={2} />
      </div>
      <main>
        <div className='ManageBookings__main-wrapper'>
          <FlightCard />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ManageBookings;

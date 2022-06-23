import './ManageBookings.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Navpanel from '../../components/navpanel/Navpanel';
import FlightCard from '../../components/flightcard/FlightCard';

function ManageBookings() {
  async function getBookings() {
    try {
      const response = await fetch('http://localhost:8000/user/bookings', {
        method: 'GET',
        headers: { token: localStorage.token },
      });

      const parsedResponse = await response.json();
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <div className='ManageBookings'>
      <div className='manage__nav'>
        <Navbar></Navbar>
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

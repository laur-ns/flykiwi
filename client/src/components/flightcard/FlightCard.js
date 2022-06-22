import './FlightCard.css';

function FlightCard({ children, flightInfo }) {
  return (
    <div className='FlightCard'>
      <div className='card__container'></div>
      {children}
    </div>
  );
}

export default FlightCard;

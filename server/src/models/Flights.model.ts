//@ts-nocheck
import query from '../db/database';

class Flights {
  static async queryFlightsUntilDay(days: Number) {
    try {
      let { rows } = await query(
        `SELECT * FROM flights WHERE depart_date < current_date + interval '$1 days'`,
        [days]
      );
      // make sure flight is not overbooked
      rows = rows.filter(async (r) => {
        const { rows } = await query(
          `SELECT * FROM flight_bookings WHERE flight_id = $1`,
          [r.flight_id]
        );
        if (rows.length >= r.seats) {
          return false;
        }
      });
      return rows;
    } catch (e) {
      throw e;
    }
  }
  static async queryFlights(
    source: string,
    destination: string,
    startDate: string,
    endDate: string
  ) {
    try {
      let { rows } = await query(
        `SELECT * FROM flights WHERE depart_date >= $3 AND depart_date < $4 AND source = $1 AND destination = $2;`,
        [source, destination, startDate, endDate]
      );
      rows = rows.filter(async (r) => {
        const { rows } = await query(
          `SELECT * FROM flight_bookings WHERE flight_id = $1`,
          [r.flight_id]
        );
        if (rows.length >= r.seats) {
          return false;
        }
      });
      return rows;
    } catch (e) {
      throw e;
    }
  }
}

export default Flights;

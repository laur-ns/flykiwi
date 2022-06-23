import query from '../db/database';

class Bookings {
  static async insertBooking(
    reference_id: string,
    user_id: string,
    flight_id: string
  ) {
    try {
      const { rows } = await query(
        `INSERT INTO flight_bookings(reference_id, user_id, flight_id) VALUES($1, $2, $3)`,
        [reference_id, user_id, flight_id]
      );
      return rows;
    } catch (e) {
      throw e;
    }
  }
}

export default Bookings;
import query from '../db/database';

class Flights {
  constructor(public username: string, public password: string) {}

  // async insertUser() {
  //   try {
  //     const { rows } = await query(
  //       `INSERT INTO users(username, password)
  //        VALUES ($1, $2) RETURNING *`,
  //       [this.username, this.password]
  //     );
  //     return rows;
  //   } catch (e) {
  //     throw e;
  //   }
  // }
  static async queryFlightsUntilDay(days: Number) {
    try {
      const { rows } = await query(
        `SELECT * FROM flights WHERE depart_date < current_date + interval '$1 days'`,
        [days]
      );
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
      const { rows } = await query(
        `SELECT * FROM flights WHERE depart_date >= $3 AND depart_date < $4 AND source = $1 AND destination = $2;`,
        [source, destination, startDate, endDate]
      );
      return rows;
    } catch (e) {
      throw e;
    }
  }
}

export default Flights;

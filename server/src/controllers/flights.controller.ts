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
}

export default Flights;

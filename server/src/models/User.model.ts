import query from '../db/database';

class User {
  constructor(public username: string, public password: string) {}

  async insertUser() {
    try {
      const { rows } = await query(
        `INSERT INTO users(username, password)
         VALUES ($1, $2) RETURNING *`,
        [this.username, this.password]
      );
      return rows;
    } catch (e) {
      throw e;
    }
  }

  static async findUser(username: string) {
    try {
      const { rows } = await query(`SELECT * FROM users WHERE username = $1`, [
        username,
      ]);
      return rows;
    } catch (e) {
      throw e;
    }
  }
}

export default User;

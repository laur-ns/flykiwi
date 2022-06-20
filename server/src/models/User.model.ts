import query from '../db/database';

class User {
  constructor(private username: string, private password: string) {}

  async insertUser() {
    try {
      const { rows } = await query(
        `INSERT INTO users(username, password)
         VALUES ($1, $2)`,
        [this.username, this.password]
      );
      return rows;
    } catch (e) {
      throw e;
    }
  }

  async findUserByName() {
    try {
      const { rows } = await query(`SELECT * FROM users WHERE username = $1`, [
        this.username,
      ]);
      return rows;
    } catch (e) {
      throw e;
    }
  }
}

export default User;

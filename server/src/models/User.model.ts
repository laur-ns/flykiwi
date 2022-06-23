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

  static async findDuplicateUser(username: string) {
    try {
      const { rows } = await query(`SELECT * FROM users WHERE username = $1`, [
        username,
      ]);
      return rows;
    } catch (e) {
      throw e;
    }
  }

  static async getUserById(user_id: string) {
    try {
      const { rows } = await query(`SELECT * FROM users WHERE user_id = $1`, [
        user_id,
      ]);
      return rows;
    } catch (e) {
      throw e;
    }
  }

  static async getAllUsers() {
    try {
      const { rows } = await query(`SELECT * FROM users`, []);
      return rows;
    } catch (e) {
      throw e;
    }
  }

  static async deleteUser(username: string) {
    try {
      await query(`DELETE FROM USERS WHERE username = $1`, [username]);
    } catch (e) {
      console.log(e);
    }
  }
}

export default User;

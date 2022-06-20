import query from '../db/index';

class User {
  constructor(private username: string, private password: string) {}

  async createUser() {
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
}

export default User;

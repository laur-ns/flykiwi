import { Pool } from 'pg';

const pool: Pool = new Pool({
  user: 'postgres',
  password: 'password',
  host: '127.0.0.1',
  port: 5432,
  database: 'flykiwi',
});

async function query(text: any, params: any) {
  const start: number = Date.now();

  try {
    const res = await pool.query(text, params);

    // time elapsed since invocation to execution
    const duration = Date.now() - start;

    console.log('executed query', { text, duration, rows: res.rowCount });

    return res;
  } catch (e) {
    console.log('error in query', { text });
    throw e;
  }
}

// text will be something like 'SELECT * FROM $1'
// params something like this array: ['users'] i.e. the table name
// $1 => replaced by users in final query

export default query;

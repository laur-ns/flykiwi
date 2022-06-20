import { Pool } from 'pg';

const pool: Pool = new Pool();

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

export default query;

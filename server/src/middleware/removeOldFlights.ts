import { NextFunction, Request, Response } from 'express';
import query from '../db/database';

async function removeOldFlights(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await query(`DELETE FROM flights WHERE depart_date < now()`, []);
  } catch (e) {
    console.error(e);
  }

  next();
}

export default removeOldFlights;

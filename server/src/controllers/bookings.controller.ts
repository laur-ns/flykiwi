import { Request, Response } from 'express';
import ShortUniqueId from 'short-unique-id';
import Bookings from '../models/Bookings.model';

const uid = new ShortUniqueId({ length: 8 });

async function bookFlight(req: Request, res: Response) {
  try {
    const reference_id: string = uid();
    const user_id: string = req.body.user_id;
    const flight_id: string = req.body.flight_id;

    await Bookings.insertBooking(reference_id, user_id, flight_id);
    res.status(200).send();
  } catch (e) {
    console.error(e);
  }
}

export { bookFlight };

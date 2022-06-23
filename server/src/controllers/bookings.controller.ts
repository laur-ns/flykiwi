import { Request, Response } from 'express';
import ShortUniqueId from 'short-unique-id';
import Bookings from '../models/Bookings.model';

const uid = new ShortUniqueId({ length: 8 });

async function bookFlight(req: Request, res: Response) {
  try {
    const reference_id: string = uid();
    //@ts-ignore
    const user_id: string = req.user_id;
    const flight_id: string = req.body.flight_id;

    await Bookings.insertBooking(reference_id, user_id, flight_id);
    res.status(200).json(reference_id);
  } catch (e) {
    console.error(e);
  }
}

async function removeBooking(req: Request, res: Response) {
  try {
    const reference_id: string = req.body.reference_id;
    console.log(reference_id);

    await Bookings.deleteBooking(reference_id);
    res.status(200).send();
  } catch (e) {
    console.error(e);
  }
}

async function getBookings(req: Request, res: Response) {
  try {
    //@ts-ignore
    const rows = await Bookings.getUserBookings(req.user_id);
  } catch (e) {
    console.error(e);
  }
}

export { bookFlight, removeBooking, getBookings };

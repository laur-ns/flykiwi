import { add, format, parseISO } from 'date-fns';
import { Request, Response } from 'express';
import Flights from '../models/Flights.model';

async function getFlightsWithin7Days(req: Request, res: Response) {
  try {
    const rows = await Flights.queryFlightsUntilDay(7);
    res.json(rows);
  } catch (e) {
    console.error(e);
  }
}

async function getFlights(req: Request, res: Response) {
  const source = req.params.from;
  const destination = req.params.to;
  const departureDate = req.params.date;
  const datePlusWeek = format(
    add(parseISO(departureDate), { weeks: 1 }),
    'yyyy-MM-dd'
  );
  const rows = await Flights.queryFlights(
    source,
    destination,
    departureDate,
    datePlusWeek
  );
  res.json(rows);
}

export { getFlightsWithin7Days, getFlights };

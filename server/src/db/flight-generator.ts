import { format, isSunday, previousSunday, add } from 'date-fns';
import query from './database';
import ShortUniqueId from 'short-unique-id';
const uid = new ShortUniqueId({ length: 24 });

async function addFlight({ ...f }: any) {
  try {
    await query(
      `INSERT INTO flights(flight_code, plane, depart_date, depart_time,
      duration_in_minutes, seats, price, source, destination)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        f.flight_code,
        f.plane,
        f.depart_date,
        f.depart_time,
        f.duration,
        f.seats,
        f.price,
        f.source,
        f.destination,
      ]
    );
  } catch (e) {
    console.error(e);
  }
}

async function addSyberJetFlights(currentDate: Date): Promise<void> {
  const syberJetUid = uid();
  await addFlight({
    flight_code: syberJetUid,
    plane: 'SJ30-01',
    depart_date: format(add(currentDate, { days: 5 }), 'yyyy-MM-dd'),
    depart_time: '08:00',
    duration: 360,
    seats: 6,
    price: 1050,
    source: 'DF',
    destination: 'SYD',
  });
  await addFlight({
    flight_code: syberJetUid,
    plane: 'SJ30-01',
    depart_date: format(add(currentDate, { days: 5 }), 'yyyy-MM-dd'),
    depart_time: '10:00',
    duration: 240,
    seats: 6,
    price: 1400,
    source: 'ROT',
    destination: 'SYD',
  });
  await addFlight({
    flight_code: uid(),
    plane: 'SJ30-01',
    depart_date: format(currentDate, 'yyyy-MM-dd'),
    depart_time: '15:00',
    duration: 270,
    seats: 6,
    price: 1100,
    source: 'SYD',
    destination: 'DF',
  });
}

async function addCirrusFlights1(currentDate: Date): Promise<void> {
  for (let j = 1; j < 6; j++) {
    // weekdays
    await addFlight({
      flight_code: uid(),
      plane: 'SF50-01',
      depart_date: format(add(currentDate, { days: j }), 'yyyy-MM-dd'),
      depart_time: '09:00',
      duration: 60,
      seats: 4,
      price: 400,
      source: 'DF',
      destination: 'ROT',
    });
    await addFlight({
      flight_code: uid(),
      plane: 'SF50-01',
      depart_date: format(add(currentDate, { days: j }), 'yyyy-MM-dd'),
      depart_time: '12:00',
      duration: 60,
      seats: 4,
      price: 360,
      source: 'ROT',
      destination: 'DF',
    });
    await addFlight({
      flight_code: uid(),
      plane: 'SF50-01',
      depart_date: format(add(currentDate, { days: j }), 'yyyy-MM-dd'),
      depart_time: '16:00',
      duration: 60,
      seats: 4,
      price: 380,
      source: 'DF',
      destination: 'ROT',
    });
    await addFlight({
      flight_code: uid(),
      plane: 'SF50-01',
      depart_date: format(add(currentDate, { days: j }), 'yyyy-MM-dd'),
      depart_time: '19:00',
      duration: 60,
      seats: 4,
      price: 420,
      source: 'ROT',
      destination: 'DF',
    });
  }
}

async function addCirrusFlights2(currentDate: Date): Promise<void> {
  for (let j = 1; j < 6; j += 2) {
    // mon-wed-fri
    await addFlight({
      flight_code: uid(),
      plane: 'SF50-02',
      depart_date: format(add(currentDate, { days: j }), 'yyyy-MM-dd'),
      depart_time: '07:30',
      duration: 45,
      seats: 4,
      price: 350,
      source: 'DF',
      destination: 'GBI',
    });
  }
  for (let j = 2; j < 7; j += 2) {
    // tue-wed-sat
    await addFlight({
      flight_code: uid(),
      plane: 'SF50-02',
      depart_date: format(add(currentDate, { days: j }), 'yyyy-MM-dd'),
      depart_time: '07:30',
      duration: 50,
      seats: 4,
      price: 380,
      source: 'GBI',
      destination: 'DF',
    });
  }
}

async function addHondaJetFlights1(currentDate: Date): Promise<void> {
  // dairy flat -> chatham islands
  await addFlight({
    flight_code: uid(),
    plane: 'HJE-01',
    depart_date: format(add(currentDate, { days: 2 }), 'yyyy-MM-dd'),
    depart_time: '12:30',
    duration: 60,
    seats: 5,
    price: 300,
    source: 'DF',
    destination: 'CI',
  });
  await addFlight({
    flight_code: uid(),
    plane: 'HJE-01',
    depart_date: format(add(currentDate, { days: 5 }), 'yyyy-MM-dd'),
    depart_time: '12:30',
    duration: 60,
    seats: 5,
    price: 300,
    source: 'DF',
    destination: 'CI',
  });

  // chatham islands -> dairy flat
  await addFlight({
    flight_code: uid(),
    plane: 'HJE-01',
    depart_date: format(add(currentDate, { days: 3 }), 'yyyy-MM-dd'),
    depart_time: '12:00',
    duration: 60,
    seats: 5,
    price: 280,
    source: 'CI',
    destination: 'DF',
  });
  await addFlight({
    flight_code: uid(),
    plane: 'HJE-01',
    depart_date: format(add(currentDate, { days: 6 }), 'yyyy-MM-dd'),
    depart_time: '12:00',
    duration: 60,
    seats: 5,
    price: 280,
    source: 'CI',
    destination: 'DF',
  });
}

async function addHondaJetFlights2(currentDate: Date): Promise<void> {
  await addFlight({
    flight_code: uid(),
    plane: 'HJE-02',
    depart_date: format(add(currentDate, { days: 1 }), 'yyyy-MM-dd'),
    depart_time: '03:30',
    duration: 180,
    seats: 5,
    price: 420,
    source: 'DF',
    destination: 'LTK',
  });
  await addFlight({
    flight_code: uid(),
    plane: 'HJE-02',
    depart_date: format(add(currentDate, { days: 5 }), 'yyyy-MM-dd'),
    depart_time: '03:30',
    duration: 180,
    seats: 5,
    price: 410,
    source: 'LTK',
    destination: 'DF',
  });
}

async function generateFlights() {
  // will generate flights for 60 days.
  try {
    for (let i = 0; i < 15; i++) {
      // [i] represents the amount of week added to current date
      let currentDate: Date = add(new Date(), { weeks: i });
      if (!isSunday(currentDate)) {
        currentDate = previousSunday(currentDate);
      }
      addSyberJetFlights(currentDate);
      addCirrusFlights1(currentDate);
      addCirrusFlights2(currentDate);
      addHondaJetFlights1(currentDate);
      addHondaJetFlights2(currentDate);
    }
  } catch (e) {
    console.error(e);
  }
}

// text will be something like 'SELECT * FROM $1'
// params something like this array: ['users'] i.e. the table name
// $1 => replaced by users in final query

export default generateFlights;

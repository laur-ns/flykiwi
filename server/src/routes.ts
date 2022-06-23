import { Express } from 'express';
import { authorize, authorizeAdmin } from './middleware/authorization';
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  loginUser,
  verifyAdmin,
  verifyUser,
} from './controllers/users.controller';
import removeOldFlights from './middleware/removeOldFlights';
import {
  getFlights,
  getFlightsWithin7Days,
} from './controllers/flights.controller';
// routes will import controllers

function routes(app: Express) {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  // ---- AUTH ---- //
  // registering
  app.post('/auth/register', createUser);

  // login
  app.post('/auth/login', loginUser);

  // verify credentials
  app.get('/auth/verify', [authorize, verifyUser]);

  // verify administrator
  app.get('/auth/verifyAdmin', [authorize, verifyAdmin]);
  // ----    ---- //
  //

  //
  // ---- API ---- //
  // get username
  app.get('/api/user', authorize, getUser);

  // get all users
  app.get('/api/users', [authorizeAdmin, getUsers]);

  // delete user
  app.delete('/api/:username', [authorizeAdmin, deleteUser]);

  // get flights for the next 7 days, this is the default view
  app.get('/api/flights', [removeOldFlights, getFlightsWithin7Days]);

  // get flights by user request
  app.get('/api/flights/:from-:to/:date', getFlights);
}

export default routes;

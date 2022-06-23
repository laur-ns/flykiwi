import { Express } from 'express';
import { authorize } from './middleware/authorization';
import {
  createUser,
  getUser,
  loginUser,
  verifyUser,
} from './controllers/users.controller';
// routes will import controllers

function routes(app: Express) {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  // registering
  app.post('/auth/register', createUser);

  // login
  app.post('/auth/login', loginUser);

  // verify credentials
  app.get('/auth/verify', [authorize, verifyUser]);

  // get username
  app.get('/api/user', authorize, getUser);
}

export default routes;

import { Express, Request, Response, NextFunction } from 'express';
import { createUser, loginUser } from './controllers/users.controller';
// routes will import controllers

function routes(app: Express) {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.get('/index', (req, res) => {
    res.send('post world!');
  });

  // registering
  app.post('/auth/users', createUser);

  // login
  app.post('/auth/login', loginUser);
}

export default routes;

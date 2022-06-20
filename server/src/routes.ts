import { Express, Request, Response, NextFunction } from 'express';
import { createUser } from './controllers/users.controller';
// routes will import controllers

function routes(app: Express) {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.get('/index', (req, res) => {
    res.send('post world!');
  });

  // registering
  app.post('/api/users', createUser);
}

export default routes;

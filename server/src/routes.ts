import { Express, Request, Response, NextFunction } from 'express';
// routes will import controllers

function routes(app: Express) {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.get('/index', (req, res) => {
    res.send('post world!');
  });
}

export default routes;

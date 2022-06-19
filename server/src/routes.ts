import { Express, Request, Response, NextFunction } from 'express';
// routes will import controllers

function routes(app: Express) {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
}

export default routes;

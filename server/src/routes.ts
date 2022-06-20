import { Express, Request, Response, NextFunction } from 'express';
// routes will import controllers

function routes(app: Express) {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.get('/index', (req, res) => {
    res.send('post world!');
  });

  // registering
  app.post('/api/users', async (req, res) => {
    try {
      // get data from req.body
      // check if user exists
      // bcrypt user password
      // enter new user inside db
      // generate jwt token
    } catch (e) {
      console.log(e);
      res.status(500).send('Server Error');
    }
  });
}

export default routes;

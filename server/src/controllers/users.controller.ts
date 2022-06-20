import { Request, Response, NextFunction } from 'express';
import User from '../models/User.model';
// controller will make database calls
// by importing from models

async function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    // get data from req.body
    const user = new User(req.body.username, req.body.password);

    // check if user exists
    const result = user.findUserByName();
    res.json(result);
    // bcrypt user password
    // enter new user inside db
    // generate jwt token
  } catch (e) {
    console.log(e);
    res.status(500).send('Server Error');
  }
}

export { createUser };

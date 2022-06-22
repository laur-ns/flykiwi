// vvv database calls are a pain with typescript, may refactor later vvv
// @ts-nocheck
import { Request, Response, NextFunction } from 'express';
import User from '../models/User.model';
import bcrypt from 'bcrypt';
import jwtGenerator from '../utils/jwtGenerator';

async function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    // get data from req.body
    const username: string = req.body.username;
    const password: string = req.body.password;

    // check if user exists
    const result = await User.findUser(username);
    if (result.length !== 0) {
      return res.json('User already exists');
    }

    // bcrypt user password
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);

    // enter new user inside db
    const user = new User(username, bcryptPassword);
    const rows = await user.insertUser();
    const newUser = rows[0];

    // generate jwt token
    const token = jwtGenerator(newUser.user_id);
    res.json({ token });
  } catch (e) {
    console.log(e);
    res.status(500).send('Server Error');
  }
}

async function loginUser(req: Request, res: Response, next: NextFunction) {
  try {
    // get data from req.body
    const username: string = req.body.username;
    const password: string = req.body.password;

    // check if user user exists, if not then throw error
    const result = await User.findUser(username);
    if (result.length === 0) {
      return res.status(401).json('Invalid credentials.');
    }

    // check if entered password is the same as db password
    const isValidPassword = await bcrypt.compare(password, result[0].password);
    if (!isValidPassword) {
      return res.status(401).json('Invalid credentials.');
    }
    // give jwt token
    const token = jwtGenerator(newUser.user_id);
    res.json(token);
  } catch (e) {
    console.log(e);
    res.status(500).send('Server Error');
  }
}

export { createUser, loginUser };

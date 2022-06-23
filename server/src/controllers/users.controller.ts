// TODO: refactor
// @ts-nocheck
import { Request, Response, NextFunction } from 'express';
import User from '../models/User.model';
import bcrypt from 'bcrypt';
import jwtGenerator from '../utils/jwtGenerator';

async function createUser(req: Request, res: Response) {
  try {
    // get data from req.body
    const username: string = req.body.username;
    const password: string = req.body.password;

    // check if user exists
    const result = await User.findDuplicateUser(username);
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

async function loginUser(req: Request, res: Response) {
  try {
    // get data from req.body
    const username: string = req.body.username;
    const password: string = req.body.password;

    // check if user user exists, if not then throw error
    const result = await User.findDuplicateUser(username);

    if (result.length === 0) {
      return res.status(401).json('Invalid credentials.');
    }

    // check if entered password is the same as encrypted password in database
    const isValidPassword = await bcrypt.compare(password, result[0].password);
    if (!isValidPassword) {
      return res.status(401).json('Invalid credentials.');
    }
    // provide jwt token
    const token = jwtGenerator(result[0].user_id);
    res.json({ token });
  } catch (e) {
    console.error(e);
    res.status(500).send('Server Error');
  }
}

async function verifyUser(req: Request, res: Response) {
  try {
    res.json(true);
  } catch (e) {
    console.error(e);
    res.status(500).send('Server Error');
  }
}

async function verifyAdmin(req: Request, res: Response) {
  try {
    const rows = await User.getUserById(req.user);
    if (rows[0].username === 'admin') {
      res.json(true);
    }
  } catch (e) {
    console.error(e);
  }
}

async function getUser(req: Request, res: Response) {
  try {
    const result = await User.getUserById(req.user);
    res.json(result[0].username);
  } catch (e) {
    console.error(e);
    res.status(500).send('Server Error');
  }
}

async function getUsers(req: Request, res: Response) {
  try {
    const result = await User.getAllUsers();
    res.json(result);
  } catch (e) {
    console.error(e);
    res.status(500).send('Server Error');
  }
}

async function deleteUser(req: Request, res: Response) {
  try {
    if (req.params.username === 'admin') {
      res.status(400).json({ message: 'Cannot delete admin!' });
      return;
    }
    await User.deleteUser(req.params.username);
    res.status(200).send('Success');
  } catch (e) {
    console.error(e);
    res.status(500).send('Server Error');
  }
}

export {
  createUser,
  loginUser,
  verifyUser,
  getUser,
  verifyAdmin,
  getUsers,
  deleteUser,
};

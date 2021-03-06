// @ts-nocheck <- issues processing environment variables, no time to figure out why
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.model';
require('dotenv').config();

async function authorize(req: Request, res: Response, next: NextFunction) {
  try {
    let token = req.header('token');
    if (!token) {
      // if client has no token
      return res.status(403).json('Not Authorized');
    }

    const payload = jwt.verify(token, process.env.jwtSecret);

    req.user = payload.user;
    const rows = await User.getUserById(req.user);
    req.user_id = rows[0].user_id;

    next();
  } catch (e) {
    console.log(e.message);
    return res.status(403).json('Not Authorized');
  }
}

async function authorizeAdmin(req: Request, res: Response, next: NextFunction) {
  try {
    let token = req.header('token');
    if (!token) {
      // if client has no token
      return res.status(403).json('Not Authorized');
    }

    const payload = jwt.verify(token, process.env.jwtSecret);

    req.user = payload.user;

    const rows = await User.getUserById(req.user);

    if (rows[0].username !== 'admin') {
      return res.status(403).json('Not Authorized');
    }
    next();
  } catch (e) {
    console.log(e.message);
    return res.status(403).json('Not Authorized');
  }
}

export { authorize, authorizeAdmin };

// @ts-nocheck <- issues processing environment variables, no time to figure out why
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
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

    next();
  } catch (e) {
    console.log(e.message);
    return res.status(403).json('Not Authorized');
  }
}

export { authorize };

import jwt from 'jsonwebtoken';
require('dotenv').config();

export default function jwtGenerator(username: string) {
  const payload = {
    user: username,
  };
  // @ts-ignore
  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: '1hr' });
}

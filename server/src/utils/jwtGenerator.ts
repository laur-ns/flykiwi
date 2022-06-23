import jwt from 'jsonwebtoken';
require('dotenv').config();

export default function jwtGenerator(user_id: string) {
  const payload = {
    user: user_id,
  };

  // @ts-ignore
  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: '2h' });
}

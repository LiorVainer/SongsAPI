import jwt from 'jsonwebtoken';
import { InsertOneResult } from 'mongodb';

export const jwtUserIdSign = (userId: string) => {
  return jwt.sign(userId, process.env.JWT_SECRET_TOKEN!);
};

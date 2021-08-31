import jwt from 'jsonwebtoken';
import { InsertOneResult } from 'mongodb';
import { Document } from 'mongodb';

export const jwtUserSign = (user: Document) => {
  return jwt.sign(user, process.env.JWT_SECRET_TOKEN!);
};

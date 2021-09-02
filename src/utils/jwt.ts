import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../types/User";

export const jwtUserSign = (user: User) => {
  return jwt.sign(user, process.env.JWT_SECRET_TOKEN!);
};

export const jwtUserVerify = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET_TOKEN!) as JwtPayload;
};

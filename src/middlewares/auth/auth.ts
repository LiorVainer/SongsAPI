import { RequestHandler } from "express";
import { JwtPayload } from "jsonwebtoken";
import { jwtUserVerify } from "../../utils/jwt";
import jwt from "jsonwebtoken";
import User from "../../types/User";

export const validateAuthToken: RequestHandler = (req, res, next) => {
  const { AUTH_TOKEN } = req.headers;
  if (AUTH_TOKEN) {
    const token = AUTH_TOKEN.toString().split(" ")[1];

    try {
      req.user = jwtUserVerify(token);
      next();
    } catch (err) {
      return res.status(403).send("JWT is not authenticated");
    }
  } else {
    next();
  }
};

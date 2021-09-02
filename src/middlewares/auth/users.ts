import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import { getCollection } from "../../dal";

const users = getCollection("users");

/**
 * Check The User with given email does not exist
 */
export const checkUserDoesNotExist: RequestHandler = async (req, res, next) => {
  const { email } = req.body;

  const userFound = await users.findOne({ email: email });

  if (userFound) {
    res.status(400).send("User with this email already exists, Try Register With Different Email");
  } else {
    next();
  }
};

/**
 * Check The User with given email or extracted from jwt payload exists
 */
export const checkUserExist: RequestHandler = async (req, res, next) => {
  const { email } = req.body;
  const { user } = req;

  let userFound;

  try {
    if (user) {
      next();
    } else if (email) {
      userFound = await users.findOne({ email: email });
    } else {
      return res.status(401).send("Missing Detailes in Request");
    }
  } catch (err) {
    return res.status(500).send("Unable to find user by details");
  }

  if (userFound) {
    req.user = userFound;
    next();
  } else {
    return res.status(403).send("User Does Not Exist");
  }
};

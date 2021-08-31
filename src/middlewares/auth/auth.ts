import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { getCollection } from '../../dal';

const users = getCollection('users');

// Check The User with given email does not exist
export const checkUserDoesNotExist: RequestHandler = async (req, res, next) => {
  const { email } = req.body;

  const userFound = await users.findOne({ email: email });

  if (userFound) {
    res.status(400).send('User with this email already exists, Try Register With Different Email');
  } else {
    next();
  }
};

// Check The User with given email exists
export const checkUserExist: RequestHandler = async (req, res, next) => {
  const { email } = req.body;

  const userFound = await users.findOne({ email: email });

  if (userFound) {
    req.user = userFound;
    next();
  } else {
    res.status(400).send('User Does Not Exist, Try to Login With Different Email');
  }
};

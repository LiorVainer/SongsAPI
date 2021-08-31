import { RequestHandler } from 'express';

/** Validates Register Request Body includes email, password and name. otherwise handles error logic */
export const registerCredentialsValitation: RequestHandler = (req, res, next) => {
  if (req.body) {
    const { email, password, name } = req.body;

    if (email && password && name) {
      return next();
    }
  }

  return res
    .status(400)
    .send(`Invalid Credential Didn't get username, password and name in the request body`);
};

/** Validates Register Request Body includes email, password and name. otherwise handles error logic */
export const loginCredentialsValitation: RequestHandler = (req, res, next) => {
  if (req.body) {
    const { email, password } = req.body;

    if (email && password) {
      return next();
    }
  }

  return res.status(400).send(`Didn't get username, password and name in the request body`);
};

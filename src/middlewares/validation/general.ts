import { RequestHandler } from 'express';

/** Validates ID sent in request path is a Valid MongoDB ObjectId and handles error logic in case it's don't */
export const validateObjectId: RequestHandler = (req, res, next) => {
  const { id } = req.params;
  if (/[A-Za-z0-9]{24}/.test(id)) {
    next();
  } else {
    return res.status(400).send('Invalid id; id must be a 24-charater string');
  }
};

import { RequestHandler } from 'express';

/** Runs an handler and deals with error logic in case handler fails */
export const handlerGuard = (handler: RequestHandler): RequestHandler => {
  return (req, res, next) => {
    try {
      handler(req, res, next);
    } catch (e) {
      console.error(e);

      // Send status 500 only if nothing has been send yet.
      if (!res.writableEnded) {
        res.sendStatus(500);
      }
    }
  };
};

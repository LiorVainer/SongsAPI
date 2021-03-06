import { User } from "./User";

/* eslint-disable @typescript-eslint/no-unused-vars */
declare module "express-serve-static-core" {
  export interface Request<
    P = ParamsDictionary,
    ResBody = any,
    ReqBody = any,
    ReqQuery = ParsedQs
  > {
    user?: User;
    jwtPayload?: JwtPayload;
  }
}

export {};

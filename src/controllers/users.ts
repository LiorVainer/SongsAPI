import { Router } from "express";
import { ObjectId } from "mongodb";
import { getCollection } from "../dal";
import {
  loginCredentialsValitation,
  registerCredentialsValitation,
} from "../middlewares/validation/users";
import { checkUserDoesNotExist, checkUserExist } from "../middlewares/auth/users";
import { handlerGuard } from "../middlewares/handlerGuard";
import { jwtUserSign, jwtUserVerify } from "../utils/jwt";
import { validateAuthToken } from "../middlewares/auth/auth";

const router = Router();

const users = getCollection("users");

router.get("/:id", async (req, res) => {
  return res.send(await users.findOne({ _id: new ObjectId(req.params.id) }));
});

router.post(
  "/register",
  registerCredentialsValitation,
  checkUserDoesNotExist,
  handlerGuard(async (req, res) => {
    const { email, password, name, type } = req.body;

    let userId, user;

    if (type === "admin") {
      userId = await (
        await users.insertOne({
          email: email,
          password: password,
          name: name,
          type: type,
        })
      ).insertedId.toHexString();

      user = await users.findOne({ _id: userId });
    } else {
      userId = await (
        await users.insertOne({
          email: email,
          password: password,
          name: name,
          type: "default",
        })
      ).insertedId.toHexString();

      user = await users.findOne({ _id: userId });
    }

    return res.send({ secretKey: jwtUserSign(user!) });
  })
);

router.post(
  "/login",
  loginCredentialsValitation,
  validateAuthToken,
  checkUserExist,
  handlerGuard(async (req, res) => {
    const { user } = req;

    res.send({ secretKey: jwtUserSign(user!) });
  })
);

export default router;

import { Router } from 'express';
import { ObjectId } from 'mongodb';
import { getCollection } from '../dal';
import {
  loginCredentialsValitation,
  registerCredentialsValitation,
} from '../middlewares/validation/users';
import { checkUserDoesNotExist, checkUserExist } from '../middlewares/auth/auth';
import { handlerGuard } from '../middlewares/handlerGuard';
import { jwtUserSign } from '../utils/jwt';

const router = Router();

const users = getCollection('users');

router.get('/:id', async (req, res) => {
  res.send(await users.findOne({ _id: new ObjectId(req.params.id) }));
});

router.post(
  '/register',
  registerCredentialsValitation,
  checkUserDoesNotExist,
  handlerGuard(async (req, res) => {
    const { email, password, name, type } = req.body;

    let userId, user;

    if (type === 'admin') {
      userId = await (
        await users.insertOne({
          email: email,
          password: password,
          name: name,
          type: 'admin',
        })
      ).insertedId.toHexString();

      user = await users.findOne({ _id: userId });
    } else {
      userId = await (
        await users.insertOne({
          email: email,
          password: password,
          name: name,
          type: 'admin',
        })
      ).insertedId.toHexString();

      user = await users.findOne({ _id: userId });
    }

    return res.send({ secretKey: jwtUserSign(user!) });
  })
);

router.post(
  '/login',
  loginCredentialsValitation,
  checkUserExist,
  handlerGuard(async (req, res) => {
    const { AUTH_TOKEN } = req.headers;

    return res.send({ secretKey: jwtUserSign(req.user!) });
  })
);

export default router;

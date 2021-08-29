import { Router } from 'express';
import { ObjectId } from 'mongodb';
import { getCollection } from '../dal';
import {
  checkUserDoesNotExist,
  registerCredentialsValitation,
} from '../middlewares/validation/users';
import { handlerGuard } from '../middlewares/handlerGuard';
import { jwtUserIdSign } from '../utils/jwt';

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

    let userId;

    if (type === 'admin') {
      userId = await (
        await users.insertOne({
          email: email,
          password: password,
          name: name,
          type: 'admin',
        })
      ).insertedId.toHexString();
    } else {
      userId = await (
        await users.insertOne({
          email: email,
          password: password,
          name: name,
          type: 'admin',
        })
      ).insertedId.toHexString();
    }

    return res.send({ secretKey: jwtUserIdSign(userId) });
  })
);

router.post('/login', (req, res) => {});

export default router;

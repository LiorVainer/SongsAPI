import './utils/loadEnv';
import logger from './utils/logger';
import express from 'express';
import DAL from './dal';
import bodyParser from 'body-parser';

export const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(bodyParser.json());

app.listen(PORT, async () => {
  await DAL.initDB();
  console.log(`Server is listening on port ${PORT}`);

  import('./utils/loadControllers');
});

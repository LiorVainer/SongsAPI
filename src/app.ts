import './utils/loadEnv';
import express from 'express';
import DAL from './dal';
export const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await DAL.initDB();
  console.log(`Server is listening on port ${PORT}`);

  import('./utils/useControllers');
});

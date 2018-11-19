import 'dotenv/config';
import express from 'express';
import logger from 'console';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.status(200)
  .send('SendIT App'));

app.listen(PORT, () => logger.log('Running on', PORT));

export default app;

import express from 'express';
import appRouter from './routes/router.js';

const app = express();

const PORT = 3000;

app.use(appRouter);

app.listen(PORT, () => {
  console.log(`Application démarée sur http://localhost:${PORT}`)
});
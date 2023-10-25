import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import appRouter from './routes/router.js';


// ==========
// App initialization
// ==========
dotenv.config();
const app = express();

const { APP_HOSTNAME, APP_PORT, NODE_ENV, MONGO_STRING, MONGO_DB_NAME, SESSION_SECRET } = process.env;

// ==========
// App middlewares
// ==========

app.use(cors())
app.use(express.json())
app.use(appRouter);

// ==========
// App routers
// ==========


// ==========
// App start
// ==========


try {
  await mongoose.connect(`${MONGO_STRING}${MONGO_DB_NAME}`)
  console.log('✅ Connecté à la base MongoDB')
  app.listen(APP_PORT, () => console.log(`App listening at http://${APP_HOSTNAME}:${APP_PORT}`));
}
catch (err) {
  console.error('Erreur de connexion à la base MongoDB', err.message)
}
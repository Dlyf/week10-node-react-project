import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';


import appRouter from './routes/router.js';


// ==========
// App initialization
// ==========
dotenv.config();
const app = express();

const PORT = 3000;

const { APP_HOSTNAME, APP_PORT, NODE_ENV, MONGO_STRING, MONGO_DB_NAME, SESSION_SECRET } = process.env;

// ==========
// App middlewares
// ==========

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

app.listen(PORT, () => {
  console.log(`Application démarée sur http://localhost:${PORT}`)
});
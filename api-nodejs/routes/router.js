import { Router } from 'express';

// @ts-ignore
const appRouter = new Router();

appRouter.get('/', (req, res) => {
  res.json({
    message: 'API OK !',
  });
});

export default appRouter;

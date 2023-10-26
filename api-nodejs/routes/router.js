import { Router } from 'express';
import LoginController, {PostLoginController} from '../controllers/login.js';
import FurnituresController from '../controllers/furnitures.js';
// import registerController, { PostRegisterController } from '../controllers/register.js';

// @ts-ignore
const appRouter = new Router();

appRouter.get('/', (req, res) => {
  res.json({
    message: 'API OK !',
  });
});

appRouter.get('/login', LoginController)
appRouter.post('/login', PostLoginController);
appRouter.get('/furnitures', FurnituresController)


export default appRouter;

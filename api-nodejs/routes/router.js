import { Router } from 'express';
import HomeController from '../controllers/home.js';
import LoginController, {LogoutController, PostLoginController} from '../controllers/login.js';
import registerController, { PostRegisterController } from '../controllers/register.js';
// @ts-ignore
const appRouter = new Router();

appRouter.get('/', (req, res) => {
  res.json({
    message: 'API OK !',
  });
});

appRouter.get('/dashboard', HomeController);
appRouter.get('/login', LoginController)
appRouter.post('/login', PostLoginController);
appRouter.get('/logout', LogoutController);
appRouter.get('/register', registerController);
appRouter.post('/register', PostRegisterController);

export default appRouter;

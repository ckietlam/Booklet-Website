
import { Router } from 'express';

import user from '../controllers/userController.js';
import { verifyToken } from '../middleware/auth.js';


const router = Router();


const initWebRouters = (app) => {
    router.get('/login', user.getLogin);
    router.post('/signup', user.postSignup);
    router.post('/login', user.postLogin);
    router.get('/google', user.getGoogle);
    router.get('/google/callback', user.getGoogleCallback, user.getGoogleCallbackJWT);
    router.get('/success', user.getSuccess);
    router.get('/isAuthenticated', verifyToken, user.getIsAuthenticated);


  return app.use("/", router);
};

export default initWebRouters;

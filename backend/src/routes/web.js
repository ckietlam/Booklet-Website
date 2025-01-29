
import { Router } from 'express';

import user from '../controllers/userController.js';
import { verifyToken } from '../middleware/auth.js';


const router = Router();


const initWebRouters = (app) => {
    router.post('/signup', user.postSignup);
    router.post('/login', user.postLogin);
    router.get('/google', user.getGoogle);
    router.get('/google/callback', user.getGoogleCallback, user.getGoogleCallbackJWT);
    router.get('/success', user.getSuccess);
    router.get('/isAuthenticated', verifyToken, user.getIsAuthenticated);
    router.post('/forgot-password', user.handleForgotPassword);
    router.post('/reset-password', user.handleResetPassword);
    router.get('/change-profile', user.changeProfile);
  return app.use("/", router);
};

export default initWebRouters;


import { Router } from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';

import user from '../controllers/userController.js';
import { verifyToken } from '../middleware/auth.js';

const router = Router();


const initWebRouters = (app) => {
    router.get('/login', user.getLogin);
    router.post('/signup', user.postSignup);
    router.post('/login', user.postLogin);
      
      // Google authentication route
      router.get(
        '/google',
        passport.authenticate('google', { scope: ['profile', 'email'] })
      );
      
      // Google callback route
      router.get(
        '/google/callback',
        passport.authenticate('google', { session: false, failureRedirect: '/' }),
        (req, res) => {
          // Successful authentication, send a token
          const token = jwt.sign(
            { userId: req.user._id, username: req.user.username },
            'secretKey'
          );
          res.render('Success', { token, userName: req.user.username });
        }
      );
      
      // Success route
      router.get('/success', (req, res) => {
        const { token } = req.query;
        // Render a success page or send a response with the token
        res.json({ message: 'Authentication successful', token });
      });
      
      // Protected Route
      router.get('/isAuthenticated', verifyToken, (req, res) => {
        res.status(200).json({
          message: 'This is a protected endpoint',
          user: req.user,
        });
      });
  return app.use("/", router);
};

export default initWebRouters;

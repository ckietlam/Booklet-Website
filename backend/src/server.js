import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import passport from 'passport';

import './passport/passport.js';
import { config, __viewsDir } from './config.js';
import initWebRouters from "./routes/web.js";

const app = express();
if (typeof process !== 'undefined') {
  console.log('process exists');
} else {
  console.log('process does not exist');
}
// Middleware
app.set('views', __viewsDir);
console.log(__viewsDir);
app.set('view engine', 'ejs');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// CORS configuration
app.use(
  cors({
    origin: 'http://localhost:3000', // Your frontend's origin
    credentials: true, // Allow credentials (cookies, headers, etc.)
  })
);

// Initialize passport
app.use(passport.initialize());

// Initialize routes
initWebRouters(app);

// MongoDB Connection
mongoose
  .connect(config.db.mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(config.app.port, () => {
      console.log(`Backend Nodejs is running on the port: ${config.app.port}`);
    });
    return null;  
  })
  .catch((error) => {
    console.log(error);
  });
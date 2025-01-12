// app.js
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import cors from 'cors';
import morgan from 'morgan';
import './passport/passport.js';
import initWebRouters from "./routes/web.js";
import { config, __viewsDir } from './config.js';

const app = express();

// Middleware
app.set('views', __viewsDir);
console.log(__viewsDir);
app.set('view engine', 'ejs');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// CORS configuration
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true
}));
app.use(morgan('dev'));

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
  })
  .catch((error) => {
    console.log(error);
  });
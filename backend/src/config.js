import path from 'path';
import { fileURLToPath } from 'url';

import { v2 as cloudinary } from "cloudinary";
import dotenv from 'dotenv';



// Create __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, './.env') });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
console.log("here Cloud", process.env.CLOUD_NAME, process.env.CLOUD_API_KEY, process.env.CLOUD_API_SECRET);
const config = {
  app: {
    port: process.env.PORT || 3000, // Default to 3000 if PORT is not defined
  },
  db: {
    mongoDBURL: process.env.MONGO_DB_URL || 'mongodb://localhost:27017/local-db', // Fallback to local MongoDB
  },
};
const __viewsDir = path.join(__dirname, './view');
const GOOGLE_AUTH_CLIENT_ID = process.env.GOOGLE_AUTH_CLIENT_ID;
const GOOGLE_AUTH_CLIENT_SECRET = process.env.GOOGLE_AUTH_CLIENT_SECRET;
const GOOGLE_AUTH_REDIRECT_URL = process.env.GOOGLE_AUTH_REDIRECT_URL;
const EMAIL_USER = process.env.EMAIL_USER;
const PASS_USER = process.env.EMAIL_PASS;

console.log(EMAIL_USER, PASS_USER);
export {
  config,
  __viewsDir,
  GOOGLE_AUTH_CLIENT_ID,
  GOOGLE_AUTH_CLIENT_SECRET,
  GOOGLE_AUTH_REDIRECT_URL,
  EMAIL_USER,
  PASS_USER,
  cloudinary
};
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Create __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, './.env') });


const config = {
  app: {
    port: process.env.PORT || 3000, // Default to 3000 if PORT is not defined
  },
  db: {
    mongoDBURL: process.env.MONGO_DB_URL || 'mongodb://localhost:27017/local-db', // Fallback to local MongoDB
  },
};
const __viewsDir = path.join(__dirname, './view');
let GOOGLE_AUTH_CLIENT_ID = process.env.GOOGLE_AUTH_CLIENT_ID;
let GOOGLE_AUTH_CLIENT_SECRET = process.env.GOOGLE_AUTH_CLIENT_SECRET;
let GOOGLE_AUTH_REDIRECT_URL = process.env.GOOGLE_AUTH_REDIRECT_URL;

export {
  config,
  __viewsDir,
  GOOGLE_AUTH_CLIENT_ID,
  GOOGLE_AUTH_CLIENT_SECRET,
  GOOGLE_AUTH_REDIRECT_URL
};
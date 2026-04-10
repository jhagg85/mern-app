import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';
import notesRoutes from './routes/notesRoutes.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
if (!PORT) {
  throw new Error('Missing PORT environment variable');
}

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use(express.json()); // parse the incoming request body in JSON format

// Custom middleware
// app.use((req, res, next) => {
//   // console.log('we just got a request!');
//   console.log(`req method is ${req.method} and the url is ${req.url}`);
//   next();
// });

app.use(rateLimiter);

app.use('/api/notes', notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

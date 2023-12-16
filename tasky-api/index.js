import './db';
import dotenv from 'dotenv';
import express from 'express';
import tasksRouter from './api/tasks';
import usersRouter from './api/users';
import cors from 'cors';
dotenv.config();

const app = express();

const port = process.env.PORT;
// Enable CORS for all requests
app.use(cors());

// Parses incoming requests with JSON payloads
app.use(express.json());

// API routes
app.use('/api/tasks', tasksRouter);
app.use('/api/users', usersRouter);

// Error Handler
const errHandler = (err, req, res, next) => {
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};

// Use the error handler after the API routes
app.use(errHandler);

// Start the server
app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

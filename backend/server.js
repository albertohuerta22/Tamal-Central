/* eslint-disable no-unused-vars */
import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import colors from 'colors';

//routes
import productRoutes from './routes/productRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running....');
});

//mount our routes
app.use('/api/products', productRoutes);

//error handling
app.use(notFound); //something that doesnt exist
app.use(errorHandler); //custom handler

const PORT = process.env.PORT || 5050;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

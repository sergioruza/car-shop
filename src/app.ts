import express from 'express';
import carsRoute from './routes/carsRoute';
import motorcyclesRoute from './routes/motorcyclesRoute';
import ErrorHandler from './middlewares/errorHandler';

const app = express();
app.use(express.json());
app.use(carsRoute);
app.use(motorcyclesRoute);
app.use(ErrorHandler.handle);

export default app;

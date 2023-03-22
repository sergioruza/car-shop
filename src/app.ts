import express from 'express';
import carsRoute from './routes/Cars';
import ErrorHandler from './middlewares/errorHandler';

const app = express();
app.use(express.json());
app.use(carsRoute);
app.use(ErrorHandler.handle);

export default app;

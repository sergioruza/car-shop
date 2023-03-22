import express from 'express';
import carsRoute from './routes/Cars';

const app = express();
app.use(express.json());
app.use(carsRoute);

export default app;

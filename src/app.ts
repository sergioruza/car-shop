import express from 'express';
import carsRoute from './routes/Cars';

const app = express();

app.use(carsRoute);

export default app;

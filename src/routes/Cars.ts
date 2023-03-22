import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post('/cars', (req, res) => new CarController(req, res).createCar);
routes.get('/cars', (req, res) => new CarController(req, res).findAll);
routes.post('/cars/:id', (req, res) => new CarController(req, res).findById);

export default routes;
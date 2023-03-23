import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();
routes.post('/motorcycles', (req, res, next) =>
  new MotorcycleController(req, res, next).createMotorcycle());

routes.get('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).findAll());
routes.get('/motorcycles/:id', (req, res, next) =>
  new MotorcycleController(req, res, next).findById());
export default routes;
import { Request, Response } from 'express';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private service: CarService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    this.service = new CarService();
  }

  async createCar() {
    const { body } = this.req;

    const result = this.service.createCar({ ...body });
    return this.res.status(201).json(result);
  }
}
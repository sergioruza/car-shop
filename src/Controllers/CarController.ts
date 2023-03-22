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

    const result = await this.service.createCar({ ...body });
    return this.res.status(201).json(result);
  }

  async findAll() {
    const result = await this.service.findAll();
    return this.res.status(200).json(result);
  }

  async findById() {
    const { id } = this.req.params;
    const result = this.service.findById(id);

    return this.res.status(200).json(result);
  }
}
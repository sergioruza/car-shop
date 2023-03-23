import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }
  
  async createCar() {
    const { body } = this.req;
    const result = await this.service.createCar({ ...body });
    return this.res.status(201).json(result);
  }

  async findAll() {
    try {
      const result = await this.service.findAll();
      return this.res.status(200).json(result);
    } catch (err) {
      this.next(err);
    }
  }

  async findById() {
    try {
      const { id } = this.req.params;
      const result = await this.service.findById(id);
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  async updateById() {
    try {
      const { body } = this.req;
      const { id } = this.req.params;

      const result = await this.service.updateById(id, { ...body });
      return this.res.status(200).json(result);
    } catch (err) {
      this.next(err);
    }
  } 
}
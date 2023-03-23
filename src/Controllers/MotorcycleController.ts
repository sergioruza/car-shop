import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  async createMotorcycle() {
    const { body } = this.req;
    const result = await this.service.createMotorcycle({ ...body });
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
    } catch (err) {
      this.next(err);
    }
  }
}
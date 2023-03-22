import { Schema, isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

export default class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super('Car', schema);
  }

  async findAll(): Promise<ICar[]> {
    const cars = await this.model.find();
    if (cars.length === 0) throw new Error('Car not found');
    return cars;
  }

  async findById(id: string): Promise<ICar | null> {
    if (!isValidObjectId(id)) throw new Error('Invalid mongo id');
    const car = await this.model.findById(id);
    if (!car) throw new Error('Car not found');
    return car;
  }
}
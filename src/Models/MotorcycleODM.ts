import { isValidObjectId, Schema } from 'mongoose';
import IMotorcycles from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class MotorcyclesODM extends AbstractODM<IMotorcycles> {
  constructor() {
    const schema = new Schema<IMotorcycles>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super('Motorcycle', schema);
  }

  async findAll(): Promise<IMotorcycles[]> {
    const motors = await this.model.find();
    if (motors.length === 0) throw new Error('Motorcycle not found');
    return motors;
  }

  async findById(id: string): Promise<IMotorcycles> {
    if (!isValidObjectId(id)) throw new Error('Invalid mongo id');
    const motor = await this.model.findById(id);
    if (!motor) throw new Error('Motorcycle not found');
    return motor;
  }
}
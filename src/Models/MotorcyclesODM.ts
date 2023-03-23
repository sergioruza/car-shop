import { Schema } from 'mongoose';
import IMotorcycles from '../Interfaces/IMotorcycles';
import MotorCycleCategories from '../utils/MotorCycleCategories';
import AbstractODM from './AbstractODM';

export default class MotorcyclesODM extends AbstractODM<IMotorcycles> {
  constructor() {
    const schema = new Schema<IMotorcycles>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: MotorCycleCategories, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super('Motorcycle', schema);
  }
}
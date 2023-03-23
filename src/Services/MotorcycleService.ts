import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private motorcycleModel = new MotorcycleODM();

  private createMotorcycleDomain(motorcycle: IMotorcycle): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  private validId(id: string) {
    return isValidObjectId(id);
  }

  async createMotorcycle(info: IMotorcycle) {
    let obj = info;
    if (!info.status) {
      obj = { ...info, status: false };
    }

    const create = await this.motorcycleModel.create(obj);
    const newMotorcycle = this.createMotorcycleDomain(create);

    return newMotorcycle;
  }
}
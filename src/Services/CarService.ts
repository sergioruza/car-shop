import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private carModel = new CarODM();
  private createCarDomain(car: ICar): Car | null {
    if (Car) {
      return new Car(car);
    }
    return null;
  }

  private async validId(id: string) {
    return isValidObjectId(id);
  }
  public async createCar(info: ICar) {
    let obj = info;
    if (!info.status) {
      obj = { ...info, status: false };
    }
    const create = await this.carModel.create(obj);
    const newCar = this.createCarDomain(create);

    return newCar;
  }

  public async findAll() {
    const result = await this.carModel.findAll();

    return result.map((e) => this.createCarDomain(e));
  }

  public async findById(id: string) {
    if (!isValidObjectId(id)) throw new Error('Invalid mongo id');
    const result = await this.carModel.findById(id);
    return this.createCarDomain(result as ICar);
  }

  public async updateById(id: string, obj: ICar) {
    const validId = await this.validId(id);
    if (!validId) throw new Error('Invalid mongo id');

    const result = await this.carModel.update(id, obj);
    if (!result) throw new Error('Car not found');

    return this.createCarDomain(result);
  }
}
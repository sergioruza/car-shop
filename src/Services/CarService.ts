import Car from '../Domains/Car';
import { ICar } from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private carModel = new CarODM();
  private createCarDomain(car: ICar): ICar | null {
    if (Car) {
      return new Car(car);
    }
    return null;
  }

  public async createCar(info: ICar) {
    const create = await this.carModel.create({ ...info });
    const newCar = this.createCarDomain(create);
    return newCar;
  }
}
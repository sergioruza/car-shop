import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private carModel = new CarODM();
  private createCarDomain(car: ICar | null): ICar | null {
    if (Car) {
      return new Car(car);
    }
    return null;
  }

  public async createCar(info: ICar) {
    let obj = info;
    if (!info.status) {
      obj = { ...info, status: false };
    }
    const create = await this.carModel.create({ ...obj });
    const newCar = this.createCarDomain(create);

    return newCar;
  }

  public async findAll() {
    const result = await this.carModel.findAll();

    return result.map((e) => this.createCarDomain(e));
  }

  public async findById(id: string) {
    const result = await this.carModel.findById(id);
    return this.createCarDomain(result);
  }
}
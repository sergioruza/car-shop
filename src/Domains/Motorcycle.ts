import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorCycleCategories from '../utils/MotorCycleCategories';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: MotorCycleCategories | undefined;
  private engineCapacity: number;

  constructor(obj: IMotorcycle) {
    super(obj);
    this.category = obj.category;
    this.engineCapacity = obj.engineCapacity;
  }

  public get GetCategory(): string | undefined {
    return this.category;
  }
  public set SetCategory(value: MotorCycleCategories) {
    this.category = value;
  }

  public get GetengineCapacity(): number {
    return this.engineCapacity;
  }
  public set SetengineCapacity(value: number) {
    this.engineCapacity = value;
  }
}
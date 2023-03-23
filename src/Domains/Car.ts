import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(obj: ICar) {
    super(obj);
    this.doorsQty = obj.doorsQty;
    this.seatsQty = obj.seatsQty;
  }

  public get GetDoorsQty(): number {
    return this.doorsQty;
  }
  public set SetDoorsQty(value: number) {
    this.doorsQty = value;
  }

  public get GetSeatsQty(): number {
    return this.seatsQty;
  }
  public set SetSeatsQty(value: number) {
    this.seatsQty = value;
  }
}
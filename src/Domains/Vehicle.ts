import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;

  constructor(obj: IVehicle) {
    this.id = obj.id;
    this.model = obj.model;
    this.year = obj.year;
    this.color = obj.color;
    this.status = obj.status || false;
    this.buyValue = obj.buyValue;
  }

  public get GetModel(): string | undefined {
    return this.model;
  }
  public set SetModel(value: string) {
    this.model = value;
  }

  public get GetYear(): number {
    return this.year;
  }
  public set SetYear(value: number) {
    this.year = value;
  }

  public get GetColor(): string {
    return this.color;
  }
  public set SetColor(value: string) {
    this.color = value;
  }

  public get GetStatus(): boolean {
    return this.status;
  }
  public set SetStatus(value: boolean) {
    this.status = value;
  }

  public get GetBuyValue(): number {
    return this.buyValue;
  }
  public set SetBuyValue(value: number) {
    this.buyValue = value;
  }
}
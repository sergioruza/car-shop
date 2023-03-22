import { ICar } from '../Interfaces/ICar';

export default class name {
  private id: string | undefined;
  private model: string;
  private year: number;
  private color: string;
  private status: boolean;
  private buyValue: number;
  private doorsQty: number;
  private seatsQty: number;
  constructor(obj: ICar) {
    this.id = obj.id;
    this.model = obj.model;
    this.year = obj.year;
    this.color = obj.color;
    this.status = obj.status;
    this.buyValue = obj.buyValue;
    this.doorsQty = obj.doorsQty;
    this.seatsQty = obj.seatsQty;
  }

  public get GetId(): string | undefined {
    return this.id;
  }
  public set SetId(value: string | undefined) {
    this.id = value;
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
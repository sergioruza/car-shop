import IAbstractVehicle from './IAbstractVehicle';

export default interface ICar extends IAbstractVehicle {
  doorsQty: number,
  seatsQty: number
}
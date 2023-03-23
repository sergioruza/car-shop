import IVehicle from './IVehicle';

export default interface IMotorcycle extends IVehicle {
  category: string | undefined,
  engineCapacity: number
}
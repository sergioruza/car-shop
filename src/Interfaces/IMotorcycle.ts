import MotorCycleCategories from '../utils/MotorCycleCategories';
import IVehicle from './IVehicle';

export default interface IMotorcycle extends IVehicle {
  category: MotorCycleCategories | undefined,
  engineCapacity: number
}
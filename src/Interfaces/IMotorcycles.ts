import MotorCycleCategories from '../utils/MotorCycleCategories';
import IAbstractVehicle from './IAbstractVehicle';

export default interface IMotorcycles extends IAbstractVehicle {
  category: MotorCycleCategories | undefined,
  engineCapacity: number
}
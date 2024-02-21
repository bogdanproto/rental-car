import { IParams } from 'interfaces/common/params';
import { IFilter } from './IFilter';

export interface IAdvert {
  id: number;
  year: number;
  make: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string;
  mileage: number;
}

export interface IMake {
  id: number;
  make: string;
}

export interface ISliceData {
  adverts: IAdvert[];
  favoriteAdverts: IAdvert[];
  makes: IMake[];
  pagination: IParams;
  filter: IFilter | null;
  error: string | null;
  isLoading: boolean;
}

import { IParams } from 'interfaces/common/params';
import { IFilter } from './IFilter';
import { ISelectOption } from 'interfaces/form/select';

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

export interface ISliceData {
  adverts: IAdvert[];
  favoriteAdverts: IAdvert[];
  makes: ISelectOption[];
  pagination: IParams;
  filter: { adverts: IFilter; favoriteAdverts: IFilter };
  modal: { content: IAdvert | null };
  error: string | null;
  isLoading: boolean;
}

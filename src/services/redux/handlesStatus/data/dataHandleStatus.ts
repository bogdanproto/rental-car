import { PayloadAction } from '@reduxjs/toolkit';
import { ISliceData } from 'interfaces';
import { IAdvert, IMake } from 'interfaces/data/IData';

export const handleFulfilledGetAllMakes = (
  state: ISliceData,
  action: PayloadAction<IMake[]>
) => {
  state.makes = action.payload;

  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledGetAllAdverts = (
  state: ISliceData,
  action: PayloadAction<IAdvert[]>
) => {
  state.adverts = [...state.adverts, ...action.payload];

  state.pagination = { ...state.pagination, page: state.pagination.page + 1 };

  state.isLoading = false;
  state.error = null;
};

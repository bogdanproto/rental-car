import { PayloadAction } from '@reduxjs/toolkit';
import { ISelectOption, ISliceData } from 'interfaces';
import { IAdvert } from 'interfaces/data/IData';

export const handleFulfilledGetAllMakes = (
  state: ISliceData,
  action: PayloadAction<ISelectOption[]>
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

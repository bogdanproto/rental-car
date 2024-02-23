import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { ISliceData } from 'interfaces';
import { getAllMakes } from '../operations/getAllMakes';
import {
  handleFulfilledGetAllAdverts,
  handleFulfilledGetAllMakes,
  handlePendingData,
  handleRejectedData,
} from '../handlesStatus';
import { getAllAdverts } from '../operations/getAllAdverts';
import { toSetFilter, toToggelFavorite } from '../reducers';

const initialState: ISliceData = {
  adverts: [],
  favoriteAdverts: [],
  makes: [],

  pagination: {
    page: 0,
    limit: 12,
  },

  filter: {
    make: '',
    price: '',
    mileageFrom: '',
    mileageTo: '',
  },

  error: null,
  isLoading: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    toggelFavorite: toToggelFavorite,
    setFilter: toSetFilter,
  },
  extraReducers: builder => {
    builder
      .addCase(getAllMakes.fulfilled, handleFulfilledGetAllMakes)
      .addCase(getAllAdverts.fulfilled, handleFulfilledGetAllAdverts)
      .addMatcher(
        isAnyOf(getAllAdverts.pending, getAllMakes.pending),
        handlePendingData
      )
      .addMatcher(
        isAnyOf(getAllAdverts.rejected, getAllMakes.rejected),
        handleRejectedData
      );
  },
});

export const dataSliceReducer = dataSlice.reducer;
export const { toggelFavorite, setFilter } = dataSlice.actions;

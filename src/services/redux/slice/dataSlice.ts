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
import {
  toOpenModal,
  toSetCatalogFilter,
  toSetFavoriteFilter,
  toToggelFavorite,
} from '../reducers';

const initialState: ISliceData = {
  adverts: [],
  favoriteAdverts: [],
  makes: [],

  pagination: {
    page: 0,
    limit: 12,
  },

  filter: {
    adverts: {
      make: '',
      price: '',
      mileageFrom: '',
      mileageTo: '',
    },
    favoriteAdverts: {
      make: '',
      price: '',
      mileageFrom: '',
      mileageTo: '',
    },
  },

  modal: {
    content: null,
  },

  error: null,
  isLoading: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    toggelFavorite: toToggelFavorite,
    setCatalogFilter: toSetCatalogFilter,
    setFavoriteFilter: toSetFavoriteFilter,
    openModal: toOpenModal,
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
export const {
  toggelFavorite,
  setCatalogFilter,
  setFavoriteFilter,
  openModal,
} = dataSlice.actions;

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectFilterCatalog = (state: RootState) =>
  state.data.filter.adverts;

export const selectFilterFavorite = (state: RootState) =>
  state.data.filter.favoriteAdverts;

export const selectIsFilterEmpty = createSelector(
  [selectFilterCatalog],
  filter => Object.entries(filter).every(value => value[1] === '')
);

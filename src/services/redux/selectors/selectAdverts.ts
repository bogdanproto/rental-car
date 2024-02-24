import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { selectFilterCatalog } from './selectFilter';
import { filterCollection } from 'services/helpers';

export const selectAdverts = (state: RootState) => state.data.adverts;

export const selectFilteredAdverts = createSelector(
  [selectAdverts, selectFilterCatalog],
  filterCollection
);

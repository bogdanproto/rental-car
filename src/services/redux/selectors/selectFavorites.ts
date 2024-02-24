import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IAdvert } from 'interfaces/data/IData';
import { selectFilterFavorite } from './selectFilter';
import { filterCollection } from 'services/helpers';

export const selectFavorites = (state: RootState) => state.data.favoriteAdverts;

export const selectFavIds = createSelector([selectFavorites], arrFavorites =>
  arrFavorites.map(({ id }: IAdvert) => id)
);

export const selectFilteredFav = createSelector(
  [selectFavorites, selectFilterFavorite],
  filterCollection
);

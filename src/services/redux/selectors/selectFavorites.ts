import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IAdvert } from 'interfaces/data/IData';

export const selectFavorites = (state: RootState) => state.data.favoriteAdverts;

export const selectFavIds = createSelector([selectFavorites], arrFavorites =>
  arrFavorites.map(({ id }: IAdvert) => id)
);

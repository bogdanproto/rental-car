import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IParams } from 'interfaces';
import { selectAdverts } from './selectAdverts';
import { IAdvert } from 'interfaces/data/IData';

export const selectPagination = (state: RootState) => state.data.pagination;

export const selectParams = createSelector(
  [selectPagination],
  ({ page, limit }: IParams) => ({
    page: page.toString(),
    limit: limit?.toString(),
  })
);

export const selectIsAdvertsExist = createSelector(
  [selectAdverts, selectPagination],
  (adverts: IAdvert[], { page, limit }: IParams) =>
    adverts.length === page * limit
);

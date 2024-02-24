import { PayloadAction } from '@reduxjs/toolkit';
import { IFilter, ISliceData } from 'interfaces';

export const toSetFavoriteFilter = (
  state: ISliceData,
  action: PayloadAction<IFilter>
) => {
  state.filter = {
    ...state.filter,
    favoriteAdverts: { ...state.filter.favoriteAdverts, ...action.payload },
  };
};

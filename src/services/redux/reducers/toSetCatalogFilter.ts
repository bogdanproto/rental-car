import { PayloadAction } from '@reduxjs/toolkit';
import { IFilter, ISliceData } from 'interfaces';

export const toSetCatalogFilter = (
  state: ISliceData,
  action: PayloadAction<IFilter>
) => {
  state.filter = {
    ...state.filter,
    adverts: { ...state.filter.adverts, ...action.payload },
  };
};

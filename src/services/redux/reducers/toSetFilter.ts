import { PayloadAction } from '@reduxjs/toolkit';
import { IFilter, ISliceData } from 'interfaces';

export const toSetFilter = (
  state: ISliceData,
  action: PayloadAction<IFilter>
) => {
  state.filter = { ...state.filter, ...action.payload };
};

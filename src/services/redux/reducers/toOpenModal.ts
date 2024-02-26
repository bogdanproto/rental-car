import { PayloadAction } from '@reduxjs/toolkit';
import { ISliceData } from 'interfaces';
import { IAdvert } from 'interfaces/data/IData';

export const toOpenModal = (
  state: ISliceData,
  action: PayloadAction<IAdvert | null>
) => {
  state.modal = {
    ...state.modal,
    content: action.payload,
  };
};

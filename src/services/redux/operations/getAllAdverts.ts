import { createAsyncThunk } from '@reduxjs/toolkit';
import { IParams } from 'interfaces';
import { getAllAdvertsAPI } from 'services/api';
import { asyncThunkDecoratorData } from 'services/helpers';

export const getAllAdverts = createAsyncThunk(
  'data/getAllAdverts',
  asyncThunkDecoratorData(async (params: IParams) => {
    return await getAllAdvertsAPI(params);
  })
);

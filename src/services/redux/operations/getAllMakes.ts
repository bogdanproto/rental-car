import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllMakeAPI } from 'services/api';
import { asyncThunkDecoratorData } from 'services/helpers';

export const getAllMakes = createAsyncThunk(
  'data/getAllMakes',
  asyncThunkDecoratorData(async () => {
    return await getAllMakeAPI();
  })
);

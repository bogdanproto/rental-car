import { createSlice } from '@reduxjs/toolkit';

import { ISliceData } from 'interfaces';

const initialState: ISliceData = {
  cars: [],
  filter: '',
  errorData: null,
  succesMsg: null,
  isLoading: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export const dataSliceReducer = dataSlice.reducer;
// export const {  } = dataSlice.actions;

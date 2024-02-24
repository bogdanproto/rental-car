import { RootState } from '../store';

export const selectMakes = (state: RootState) => state.data.makes;

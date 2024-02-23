import { RootState } from '../store';

export const selectAdverts = (state: RootState) => state.data.adverts;

import { RootState } from '../store';

export const selectError = (state: RootState) => state.data.error;

export const selectIsLoading = (state: RootState) => state.data.isLoading;

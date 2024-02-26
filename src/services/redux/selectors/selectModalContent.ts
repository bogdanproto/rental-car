import { RootState } from '../store';

export const selectModalContent = (state: RootState) =>
  state.data.modal.content;

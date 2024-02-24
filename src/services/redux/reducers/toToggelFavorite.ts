import { PayloadAction } from '@reduxjs/toolkit';
import { errorMessage } from 'const';
import { ISliceData } from 'interfaces';
import { IAdvert } from 'interfaces/data/IData';

export const toToggelFavorite = (
  state: ISliceData,
  action: PayloadAction<number>
) => {
  const id = action.payload;

  const filteredFav = state.favoriteAdverts.filter(advert => advert.id !== id);

  if (filteredFav.length !== state.favoriteAdverts.length) {
    state.favoriteAdverts = filteredFav;
    return;
  }

  const advert = state.adverts.find((advert: IAdvert) => advert.id === id);

  if (!advert) {
    state.error = errorMessage.NOT_FOUND_ID;
    return;
  }

  state.favoriteAdverts = [...state.favoriteAdverts, advert];
};

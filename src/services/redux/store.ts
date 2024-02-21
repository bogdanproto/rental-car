import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { dataSliceReducer } from './slice/dataSlice';

const dataPersistConfig = {
  key: 'data',
  storage,
  whitelist: [],
};

export const store = configureStore({
  reducer: {
    data: persistReducer(dataPersistConfig, dataSliceReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type TypeDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type TypeThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

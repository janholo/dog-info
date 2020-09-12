import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import navbarReducer from '../features/navbar/navbarSlice';
import breedsReducer from '../features/breeds/breedsSlice';
import toastReducer from '../features/toast/toastSlice';

export const store = configureStore({
  middleware: getDefaultMiddleware({immutableCheck: {warnAfter: 100}}),
  reducer: {
    navbar: navbarReducer,
    breeds: breedsReducer,
    toast: toastReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

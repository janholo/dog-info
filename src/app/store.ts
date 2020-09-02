import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import navbarReducer from '../features/navbar/navbarSlice';
import breedsReducer from '../features/breeds/breedsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navbar: navbarReducer,
    breeds: breedsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

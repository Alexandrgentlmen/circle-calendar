import { configureStore } from '@reduxjs/toolkit';
import { datesSlice } from './datesSlice';

export const store = configureStore({
  devTools: true,
  reducer: {
    dates: datesSlice.reducer,
  },
});

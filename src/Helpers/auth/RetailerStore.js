import { configureStore } from '@reduxjs/toolkit';
import  retailersSlice from './RetailerSlice'

export const store = configureStore({
  reducer: {
    retailers: retailersSlice
  }
});

export default store;

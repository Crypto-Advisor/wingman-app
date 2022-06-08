import { configureStore } from '@reduxjs/toolkit';
import LandingSlice from '../components/landing/LandingSlice';

export const store = configureStore({
  reducer: {
    landing: LandingSlice
  },
});

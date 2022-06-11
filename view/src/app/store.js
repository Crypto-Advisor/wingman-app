import { configureStore } from '@reduxjs/toolkit';
import LandingSlice from '../components/landing/LandingSlice';
import LoginPopupSlice from '../components/loginpopup/LoginPopupSlice';

export const store = configureStore({
  reducer: {
    landing: LandingSlice,
    login: LoginPopupSlice
  },
});

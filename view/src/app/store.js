import { configureStore } from '@reduxjs/toolkit';
import LandingSlice from '../components/landing/LandingSlice';
import LoginPopupSlice from '../components/loginpopup/LoginPopupSlice';
import SelectPhotosSlice from '../components/selectphotos/SelectPhotosSlice';

export const store = configureStore({
  reducer: {
    landing: LandingSlice,
    login: LoginPopupSlice,
    photos: SelectPhotosSlice
  },
});

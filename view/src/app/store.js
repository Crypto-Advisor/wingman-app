import { configureStore } from '@reduxjs/toolkit';
import LandingSlice from '../components/landing/LandingSlice';
import LoginPopupSlice from '../components/loginpopup/LoginPopupSlice';
import PicturesListSlice from '../components/pictureslist/PicturesListSlice';
import SelectPhotosSlice from '../components/selectphotos/SelectPhotosSlice';
import SwipeboxSlice from '../components/swipebox/SwipeboxSlice';
import SwipeCreditsSlice from '../components/swipecredits/SwipeCreditsSlice';

export const store = configureStore({
  reducer: {
    landing: LandingSlice,
    login: LoginPopupSlice,
    photos: SelectPhotosSlice,
    pictures: PicturesListSlice,
    swipebox: SwipeboxSlice,
    swipecredits: SwipeCreditsSlice
  },
});

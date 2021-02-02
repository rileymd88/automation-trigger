import { configureStore } from '@reduxjs/toolkit';
import formsReducer from './states/formsSlice';
export default configureStore({
  reducer: {
    forms: formsReducer
  },
});
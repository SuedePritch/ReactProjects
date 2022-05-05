import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../services/authSlice';
import mealReducer from '../services/mealSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    meals: mealReducer
  },
});

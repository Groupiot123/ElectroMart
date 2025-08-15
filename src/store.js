import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/authSlice';
import registerUserReducer from './redux/signup';
 
export const store = configureStore({
  reducer: {
    auth: authReducer,
    registerUser :registerUserReducer,
  },
});
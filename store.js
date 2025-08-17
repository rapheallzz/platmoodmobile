// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './src/features/authSlice';
import userReducer from './src/features/userSlice';
import contentReducer from './src/features/contentSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer, 
    content: contentReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './auth-store';

const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
  },
});

export default store;

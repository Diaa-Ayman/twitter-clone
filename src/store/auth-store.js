import { createSlice } from '@reduxjs/toolkit';

const initialToken = localStorage.getItem('token');
const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    token: initialToken,
    isLoggedIn: !!initialToken,
  },
  reducers: {
    logout(state) {
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem('token');
    },
    login(state, action) {
      state.token = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem('token', state.token);
    },
  },
});

export const authActions = AuthSlice.actions;

export default AuthSlice;

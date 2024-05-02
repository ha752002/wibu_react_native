import { createSlice } from '@reduxjs/toolkit';

export type AuthState = {
  access_token: string;
  expires_in: number;
};

const initialState: AuthState = {
  access_token: '',
  expires_in: 0,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export const authReducer = authSlice.reducer;

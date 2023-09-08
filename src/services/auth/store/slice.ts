import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api/auth-api";


interface IAuthState {
  userName?: string;
  email?: string;
  accessToken?: string | null;
}

const initialState: IAuthState = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.register.matchFulfilled,
        (state: IAuthState, { payload }) => {
          if (payload.accessToken) {
            state.email = payload.email;
            state.userName = payload.userName;
            state.accessToken= payload.accessToken;
          }
        }
      )
      .addMatcher(
        authApi.endpoints.refreshToken.matchFulfilled,
        (state: IAuthState, { payload }) => {
          if (payload.accessToken) {
            state.email = payload.email;
            state.userName = payload.userName;
            state.accessToken= payload.accessToken;
          }
        }
      )
  },
});

export const selectIsAuth = (state: RootState) => !!state.auth?.accessToken;

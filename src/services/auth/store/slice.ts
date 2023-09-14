import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api/auth-api";
import { matchReducer } from "../lib";
import { IAuthState } from "../types";

const initialState: IAuthState = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state: IAuthState, { payload }) => {
          matchReducer(state, payload);
        }
      )
      .addMatcher(
        authApi.endpoints.register.matchFulfilled,
        (state: IAuthState, { payload }) => {
          matchReducer(state, payload);
        }
      )
      .addMatcher(
        authApi.endpoints.refreshToken.matchFulfilled,
        (state: IAuthState, { payload }) => {
          matchReducer(state, payload);
        }
      )
  },
});

export const selectIsAuth = (state: RootState) => !!state.auth?.accessToken;

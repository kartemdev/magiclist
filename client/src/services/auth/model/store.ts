import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IAuthResponseDTO } from '~shared/api';

import { IAuthState } from './types';
import { authApi } from '../api/auth.api';
import { storeFiller } from './store-filler';

const initialState: IAuthState = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken(state, action: PayloadAction<IAuthResponseDTO>) {
      storeFiller(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    const {
      login,
      register,
      logout,
      refresh
    } = authApi.endpoints;

    builder
      .addMatcher(
        login.matchFulfilled,
        (state: IAuthState, { payload }) => {
          storeFiller(state, payload);
        }
      )
      .addMatcher(
        register.matchFulfilled,
        (state: IAuthState, { payload }) => {
          storeFiller(state, payload);
        }
      )
      .addMatcher(
        refresh.matchFulfilled,
        (state: IAuthState, { payload }) => {
          storeFiller(state, payload);
        }
      )
      .addMatcher(
        logout.matchPending,
        (state: IAuthState) => {
          state.accessToken = null;
        },
      );
  },
});

export const { setAuthToken } = authSlice.actions;
export const selectIsAuth = (state: RootState) => !!state.auth.accessToken;

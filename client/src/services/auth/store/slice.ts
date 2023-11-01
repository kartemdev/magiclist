import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IResponseAuthDTO } from '~shared/api';
import { authApi } from '../api/auth-api';
import { matchReducer, resetState } from '../lib';
import { IAuthState } from '../types';

const initialState: IAuthState = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser(state, action: PayloadAction<IResponseAuthDTO>) {
      matchReducer(state, action.payload);
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
          matchReducer(state, payload);
        }
      )
      .addMatcher(
        register.matchFulfilled,
        (state: IAuthState, { payload }) => {
          matchReducer(state, payload);
        }
      )
      .addMatcher(
        refresh.matchFulfilled,
        (state: IAuthState, { payload }) => {
          matchReducer(state, payload);
        }
      )
      .addMatcher(
        logout.matchFulfilled,
        (state: IAuthState) => {
          resetState(state);
        },
      )
  },
});

export const { setAuthUser } = authSlice.actions;
export const selectIsAuth = (state: RootState) => !!state.auth?.accessToken;

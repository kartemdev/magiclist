import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../types";
import { userApi } from "../api/user.api";
import { matchReducer } from "../lib";

const initialState: IUserState = {
  isVerified: true,
  isExpiresVerifie: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const {
      getUserInfo,
      getVerifie
    } = userApi.endpoints;

    builder
      .addMatcher(
        getUserInfo.matchFulfilled,
        (state: IUserState, { payload }) => {
          matchReducer(state, payload)
        }
      )
      .addMatcher(
        getVerifie.matchFulfilled,
        (state: IUserState, { payload }) => {
          state.verifieCreatedTime = payload.verifieCreatedTime;
          state.isExpiresVerifie = payload.isExpiresVerifie;
        }
      )
  },
});

export const selectIsVerifiedUser = (state: RootState) => !!state.user.isVerified;

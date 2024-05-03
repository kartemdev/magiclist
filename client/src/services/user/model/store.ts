import { createSlice } from "@reduxjs/toolkit";

import { IUserState } from "./types";
import { userApi } from "../api/user.api";

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
          state.id = payload.id;
          state.userName = payload.userName;
          state.email = payload.email;
          state.isVerified = payload.isVerified;
          state.registerDate = payload.registerDate;
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
export const selectVerifieCreatedTime = (state: RootState) => state.user.verifieCreatedTime;

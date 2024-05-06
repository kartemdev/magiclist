import { createSlice } from "@reduxjs/toolkit";

import { IUserState } from "./types";
import { userApi, userVerifieApi } from "../api";

const initialState: IUserState = {
  isVerified: true,
  isExpiresVerifie: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const { getUserInfo } = userApi.endpoints;
    const { getVerifie } = userVerifieApi.endpoints;

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

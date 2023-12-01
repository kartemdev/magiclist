import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../types";
import { userApi } from "../api/user-api";
import { matchReducer } from "../lib";

const initialState: IUserState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const {
      getUserInfo,
    } = userApi.endpoints;

    builder
      .addMatcher(
        getUserInfo.matchFulfilled,
        (state: IUserState, { payload }) => {
          matchReducer(state, payload)
        }
      );
  },
});

export const selectUserInfo = (state: RootState) => state.user;

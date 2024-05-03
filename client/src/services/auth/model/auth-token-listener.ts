import { createListenerMiddleware } from "@reduxjs/toolkit";

import { setAuthTokenAction } from "~shared/api";

import { setAuthToken } from "./store";

export const authTokenListener = createListenerMiddleware();

export const startAuthTokenListener = authTokenListener.startListening as TypedListening;

startAuthTokenListener({
  actionCreator: setAuthTokenAction,
  effect: async (args, api) => {
    api.dispatch(setAuthToken(args.payload))
  },
});

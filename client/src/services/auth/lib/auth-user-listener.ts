import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setAuthUserAction } from "~shared/api";
import { setAuthUser } from "../store/slice";

export const authUserListener = createListenerMiddleware();

export const startAuthUserListener = authUserListener.startListening as TypedListening;

startAuthUserListener({
  actionCreator: setAuthUserAction,
  effect: async (args, api) => {
    api.dispatch(setAuthUser(args.payload))
  }
});

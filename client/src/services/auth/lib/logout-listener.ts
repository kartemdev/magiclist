import { createListenerMiddleware } from "@reduxjs/toolkit";
import { logoutAction } from "~shared/api";
import { authApi } from "../api/auth-api";

export const logoutListener = createListenerMiddleware();

export const startLogoutListener = logoutListener.startListening as TypedListening;

startLogoutListener({
  actionCreator: logoutAction,
  effect: async (_, api) => {
    api.dispatch(
      authApi.endpoints.logout.initiate(undefined)
    )
  }
});

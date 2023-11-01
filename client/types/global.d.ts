import { TFunction } from "i18next";
import { store } from "../src/app/app-store";
import { TypedStartListening } from "@reduxjs/toolkit";
export {};

declare global {
  let API_HOST: string | null;

  type AppDispatch = typeof store.dispatch;
  
  type RootState = ReturnType<typeof store.getState>;

  type TypedListening = TypedStartListening<RootState, AppDispatch>;

  type Key<T> = keyof T;

  interface Window {
    translate: TFunction;
  }
}

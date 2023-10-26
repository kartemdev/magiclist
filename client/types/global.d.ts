import { TFunction } from "i18next";
import { store } from "../src/app/app-store";
export {};

declare global {
  let API_HOST: string | null;

  type AppDispatch = typeof store.dispatch
  
  type RootState = ReturnType<typeof store.getState>

  type Key<T> = keyof T;

  interface Window {
    translate: TFunction;
  }
}

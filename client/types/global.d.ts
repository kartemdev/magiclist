import { TFunction } from "i18next";
import { store } from "../src/app/app-store";
export {};

declare global {

  type AppDispatch = typeof store.dispatch
  
  type RootState = ReturnType<typeof store.getState>

  interface Window {
    translate: TFunction;
    _env_: Record<string, string>;
  }
}

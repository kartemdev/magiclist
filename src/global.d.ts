import { store } from "app";
export {};

declare global {

  type AppDispatch = typeof store.dispatch
  
  type RootState = ReturnType<typeof store.getState>
}

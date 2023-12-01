import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '~shared/api';
import { logoutListener, authTokenListener } from '~services/auth';
import { rootReducer } from './root-reducer';

const createStore = () => configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(logoutListener.middleware)
      .concat(authTokenListener.middleware);
  },
  devTools: !API_HOST,
});

export const store = createStore();

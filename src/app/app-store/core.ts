import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '~shared/api';
import { rootReducer } from './root-reducer';

const createStore = () => configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(baseApi.middleware);
  },
});

export const store = createStore();

import { baseApi } from 'shared/api';

export const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
};

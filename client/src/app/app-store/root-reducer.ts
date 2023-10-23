import { authSlice } from '~services/auth';
import { baseApi } from '~shared/api';

export const rootReducer = {
  [authSlice.name]: authSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
};

import { authSlice } from '~services/auth';
import { userSlice } from '~services/user';
import { baseApi } from '~shared/api';

export const rootReducer = {
  [authSlice.name]: authSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
};

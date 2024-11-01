import { authSlice } from '~services/auth';
import { residuesSlice } from '~services/residues';
import { userSlice } from '~services/user';
import { baseApi } from '~shared/api';

export const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  [authSlice.name]: authSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [residuesSlice.name]: residuesSlice.reducer,
};

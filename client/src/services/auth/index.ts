export {
  authApi,
  useLogin,
  useRegister,
  useLogout,
  useRefresh,
} from './api/auth.api';

export {
  authSlice,
  setAuthToken,
  selectIsAuth,
} from './store/slice';

export { logoutListener, authTokenListener } from './lib';

export type {
  IAuthState,
} from './types';

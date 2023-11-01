export {
  authApi,
  useLogin,
  useRegister,
  useLogout,
  useRefresh,
} from './api/auth-api';

export {
  authSlice,
  setAuthUser,
  selectIsAuth,
} from './store/slice';

export { logoutListener, authUserListener } from './lib';

export type {
  IAuthState,
} from './types';

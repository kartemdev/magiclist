export {
  authApi,
  useLogin,
  useRegister,
  useLogout,
  useRefresh,
} from './api/auth.api';

export {
  type IAuthState,
  authSlice,
  setAuthToken,
  selectIsAuth,
  logoutListener,
  authTokenListener,
} from './model';

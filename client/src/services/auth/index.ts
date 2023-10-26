export {
  authApi,
  useLogin,
  useRegister,
  useLogout,
  useRefresh,
} from './api/auth-api';

export {
  authSlice,
  selectIsAuth,
} from './store/slice';

export type {
  IAuthState,
  IPayloadLoginDTO,
  IPayloadRegisterDTO,
  IResponseAuthDTO,
} from './types'

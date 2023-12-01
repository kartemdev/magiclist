import { baseApi, ILoginRequestDTO, IRegisterRequestDTO, IAuthResponseDTO} from "~shared/api";
import { AuthEndPoints } from "~shared/config";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<IAuthResponseDTO, ILoginRequestDTO>({
      query: (payload) => ({
        url: AuthEndPoints.LOGIN,
        method: 'POST',
        body: payload,
        credentials: 'include',
      }),
      invalidatesTags: ['UserInfo'],
    }),
    register: build.mutation<IAuthResponseDTO, IRegisterRequestDTO>({
      query: (payload) => ({
        url: AuthEndPoints.REGISTER,
        method: 'POST',
        body: payload,
        credentials: 'include',
      }),
      invalidatesTags: ['UserInfo'],
    }),
    logout: build.mutation<unknown, unknown>({
      query: () => ({
        url: AuthEndPoints.LOGOUT,
        method: 'GET',
        credentials: 'include',
      }),
    }),
    refresh: build.query<IAuthResponseDTO, undefined>({
      query: () => ({
        url: AuthEndPoints.REFRESH,
        method: 'GET',
        credentials: 'include',
      }),
    }),
  }),
});

export const {
  useLoginMutation: useLogin,
  useRegisterMutation: useRegister,
  useLogoutMutation: useLogout,
} = authApi;

export const useRefresh = () => authApi.useRefreshQuery(undefined);

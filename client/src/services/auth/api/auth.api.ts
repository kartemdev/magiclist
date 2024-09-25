import {
  baseApi,
  AuthEndPoints,
  RtkQueryCallbacks,
  ILoginRequestDTO,
  IAuthResponseDTO,
  IRegisterRequestDTO,
} from '~shared/api';

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<IAuthResponseDTO, ILoginRequestDTO>({
      query: (payload) => ({
        method: 'POST',
        body: payload,
        url: AuthEndPoints.LOGIN,
      }),
      invalidatesTags: (_, error) => (error ? [] : ['UserInfo', 'UserVerifie']),
    }),
    register: build.mutation<IAuthResponseDTO, IRegisterRequestDTO>({
      query: (payload) => ({
        method: 'POST',
        body: payload,
        url: AuthEndPoints.REGISTER,
      }),
      invalidatesTags: (_, error) => (error ? [] : ['UserInfo', 'UserVerifie']),
    }),
    logout: build.mutation<unknown, RtkQueryCallbacks>({
      query: () => ({
        method: 'GET',
        url: AuthEndPoints.LOGOUT,
      }),
      async onQueryStarted({ onSuccess, onError }, { queryFulfilled }) {
        try {
          await queryFulfilled;
          onSuccess?.();
        } catch {
          onError?.();
        }
      },
    }),
    refresh: build.query<IAuthResponseDTO, undefined>({
      query: () => ({
        method: 'GET',
        url: AuthEndPoints.REFRESH,
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

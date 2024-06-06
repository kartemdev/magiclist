import { AuthEndPoints } from "~shared/config";
import { RtkQueryCallbacks } from "~shared/lib";
import { baseApi, ILoginRequestDTO, IRegisterRequestDTO, IAuthResponseDTO} from "~shared/api";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<IAuthResponseDTO, ILoginRequestDTO>({
      query: (payload) => ({
        url: AuthEndPoints.LOGIN,
        method: 'POST',
        body: payload,
        credentials: 'include',
      }),
      invalidatesTags: (_, error) => error ? [] : ['UserInfo', 'UserVerifie'],
    }),
    register: build.mutation<IAuthResponseDTO, IRegisterRequestDTO>({
      query: (payload) => ({
        url: AuthEndPoints.REGISTER,
        method: 'POST',
        body: payload,
        credentials: 'include',
      }),
      invalidatesTags: (_, error) => error ? [] : ['UserInfo', 'UserVerifie'],
    }),
    logout: build.mutation<unknown, RtkQueryCallbacks>({
      query: () => ({
        url: AuthEndPoints.LOGOUT,
        method: 'GET',
        credentials: 'include',
      }),
      async onQueryStarted({ onSuccess, onError }, { queryFulfilled }) {
        try {
          await queryFulfilled;
          onSuccess();
        } catch {
          onError();
        }
      }
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

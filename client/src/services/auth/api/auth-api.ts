import { baseApi, IPayloadLoginDTO, IPayloadRegisterDTO, IResponseAuthDTO } from "~shared/api";
import { ApiEndPoints } from "~shared/lib";

export const authApi = baseApi.enhanceEndpoints({
  addTagTypes: ['Login', 'Register', 'Logout', 'Refresh'],
}).injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<IResponseAuthDTO, IPayloadLoginDTO>({
      query: (payload) => ({
        url: ApiEndPoints.LOGIN,
        method: 'POST',
        body: payload,
        credentials: 'include',
      }),
      invalidatesTags: ['Login'],
    }),
    register: build.mutation<IResponseAuthDTO, IPayloadRegisterDTO>({
      query: (payload) => ({
        url: ApiEndPoints.REGISTER,
        method: 'POST',
        body: payload,
        credentials: 'include',
      }),
      invalidatesTags: ['Register'],
    }),
    logout: build.mutation<unknown, unknown>({
      query: () => ({
        url: ApiEndPoints.LOGOUT,
        method: 'get',
        credentials: 'include',
      }),
      invalidatesTags: ['Logout'],
    }),
    refresh: build.query<IResponseAuthDTO, unknown>({
      query: () => ({
        url: ApiEndPoints.REFRESH,
        method: 'get',
        credentials: 'include',
      }),
      providesTags: ['Refresh'],
    }),
  }),
});

export const {
  useLoginMutation: useLogin,
  useRegisterMutation: useRegister,
  useLogoutMutation: useLogout,
} = authApi;

export const useRefresh = () => authApi.useRefreshQuery(undefined);

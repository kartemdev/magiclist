import { baseApi } from "~shared/api";
import { IPayloadLoginDTO, IPayloadRegisterDTO, IResponseAuthDTO } from "../types";
import { notyEmit } from "~shared/lib";
import { error } from "console";

export const authApi = baseApi.enhanceEndpoints({
  addTagTypes: ['Login', 'Register', 'Logout', 'Refresh'],
}).injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<IResponseAuthDTO, IPayloadLoginDTO>({
      query: (payload) => ({
        url: 'auth/login',
        method: 'POST',
        body: payload,
        credentials: 'include',
      }),
      invalidatesTags: ['Login'],
    }),
    register: build.mutation<IResponseAuthDTO, IPayloadRegisterDTO>({
      query: (payload) => ({
        url: 'auth/register',
        method: 'POST',
        body: payload,
        credentials: 'include',
      }),
      invalidatesTags: ['Register'],
    }),
    logout: build.mutation<unknown, unknown>({
      query: () => ({
        url: 'auth/logout',
        method: 'get',
        credentials: 'include',
      }),
      invalidatesTags: ['Logout'],
    }),
    refresh: build.query<IResponseAuthDTO, unknown>({
      query: () => ({
        url: 'auth/refresh',
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

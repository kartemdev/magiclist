import { baseApi } from "~shared/api";
import { IPayloadLoginDTO, IPayloadRegisterDTO, IResponseAuthDTO } from "../types";

export const authApi = baseApi.enhanceEndpoints({
  addTagTypes: ['Login', 'Register', 'Refresh'],
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
    refreshToken: build.query<IResponseAuthDTO, undefined>({
      query: () => ({
        url: 'auth/refresh',
        method: 'get',
        credentials: 'include',
      }),
      providesTags: ['Refresh'],
    }),
  }),
});

export const { useRegisterMutation: useRegister, useLoginMutation: useLogin } = authApi;
export const useRefresh = () => authApi.useRefreshTokenQuery(undefined);

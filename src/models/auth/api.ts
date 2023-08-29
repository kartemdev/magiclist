import { baseApi } from "shared/api";
import { IPayloadLoginDto, IPayloadRegisterDto, IResponseAuthDto } from "./types";


const authApi = baseApi.enhanceEndpoints({
  addTagTypes: ['Login', 'Register', 'Refresh'],
}).injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<IResponseAuthDto, IPayloadLoginDto>({
      query: (payload) => ({
        url: 'auth/login',
        method: 'POST',
        body: payload,
      }),
    }),
    register: build.mutation<IResponseAuthDto, IPayloadRegisterDto>({
      query: (payload) => ({
        url: 'auth/register',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

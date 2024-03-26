import {
  baseApi,
  IUserInfoResponseDTO,
  IUpdateUserInfoRequestDTO,
} from "~shared/api";
import { IUserVerifieResponseDTO } from "~shared/api/dto/user";
import { UserEndPoints } from "~shared/config";
import { notyEmit } from "~shared/lib";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUserInfo: build.query<IUserInfoResponseDTO, unknown>({
      query: () => ({
        url: `${UserEndPoints.USER_INFO}?__read`,
        method: 'GET',
        credentials: 'include',
      }),
      providesTags: ['UserInfo'],
    }),
    updateUserInfo: build.mutation<unknown, IUpdateUserInfoRequestDTO>({
      query: (payload) => ({
        url: `${UserEndPoints.USER_INFO}?__update`,
        body: payload,
        method: 'PATCH',
        credentials: 'include',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;

          notyEmit.success('user_info_success_updated');

          dispatch(userApi.endpoints.getUserInfo.initiate(null, { forceRefetch: true }));
        } catch {}
      },
    }),
    getVerifie: build.query<IUserVerifieResponseDTO, unknown>({
      query: () => ({
        url: `${UserEndPoints.USER_VERIFIE}?__read`,
        method: 'GET',
        credentials: 'include',
      }),
      providesTags: ['UserVerifie'],
    }),
    verifieUser: build.mutation<unknown, unknown>({
      query: () => ({
        url: `${UserEndPoints.USER_SEND_VERIFIE}`,
        method: 'GET',
        credentials: 'include',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(userApi.endpoints.getVerifie.initiate(null, { forceRefetch: true }));
        } catch {}
      },
    }),
    confirmVerifieUser: build.mutation<unknown, string>({
      query: (payload) => ({
        url: `${UserEndPoints.USER_CONFIRM_VERIFIE}/${payload}`,
        method: 'GET',
        credentials: 'include',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(userApi.endpoints.getUserInfo.initiate(null, { forceRefetch: true }));
        } catch {}
      },
    }),
  })
});

export const {
  useUpdateUserInfoMutation: useUpdateUserInfo,
  useVerifieUserMutation: useVerifieUser,
  useConfirmVerifieUserMutation: useConfirmVerifieUser,
} = userApi;

export const useGetUserInfo = () => userApi.useGetUserInfoQuery(null);
export const useLazyGetUserInfo = () => userApi.useLazyGetUserInfoQuery();
export const useGetVerifie = () => userApi.useGetVerifieQuery(null);
export const useLazyGetVerifie = () => userApi.useLazyGetVerifieQuery();

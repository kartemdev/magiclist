import {
  baseApi,
  IUserInfoResponseDTO,
  IUpdateUserInfoRequestDTO,
} from "~shared/api";
import { IUserVerifieResponseDTO } from "~shared/api/dto/user";
import { UserEndPoints } from "~shared/config";
import { notyEmit } from "~shared/lib";
import { RtkQueryCallbacks } from "~shared/lib";

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
    updateUserInfo: build.mutation<unknown, RtkQueryCallbacks<IUpdateUserInfoRequestDTO>>({
      query: (payload) => ({
        url: `${UserEndPoints.USER_INFO}?__update`,
        body: payload.data,
        method: 'PATCH',
        credentials: 'include',
      }),
      invalidatesTags: (_, error, { onSuccess }) => {
        if (error) {
          return [];
        }

        onSuccess();
        notyEmit.success('user_info_success_updated');

        return ['UserInfo'];
      },
    }),
  })
});

export const { useUpdateUserInfoMutation: useUpdateUserInfo } = userApi;

export const useGetUserInfo = () => userApi.useGetUserInfoQuery(null);
export const useLazyGetUserInfo = () => userApi.useLazyGetUserInfoQuery();

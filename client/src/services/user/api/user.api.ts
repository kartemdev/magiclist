import {
  baseApi,
  UserEndPoints,
  RtkQueryCallbacks,
  IUserInfoResponseDTO,
  IUpdateUserInfoRequestDTO,
} from '~shared/api';
import { notyEmit } from '~shared/lib';

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUserInfo: build.query<IUserInfoResponseDTO, unknown>({
      query: () => ({
        method: 'GET',
        url: UserEndPoints.USER_INFO,
      }),
      providesTags: ['UserInfo'],
    }),
    updateUserInfo: build.mutation<unknown, RtkQueryCallbacks<IUpdateUserInfoRequestDTO>>({
      query: (payload) => ({
        method: 'PATCH',
        body: payload.data,
        url: UserEndPoints.USER_INFO,
      }),
      invalidatesTags: (_, error, { onSuccess }) => {
        if (error) {
          return [];
        }

        onSuccess?.();
        notyEmit.success('user_info_success_updated');

        return ['UserInfo'];
      },
    }),
  }),
});

export const { useUpdateUserInfoMutation: useUpdateUserInfo } = userApi;

export const useGetUserInfo = () => userApi.useGetUserInfoQuery(null);
export const useLazyGetUserInfo = () => userApi.useLazyGetUserInfoQuery();

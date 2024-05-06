import { baseApi } from "~shared/api";
import { UserEndPoints } from "~shared/config";
import { IUserVerifieResponseDTO } from "~shared/api/dto/user";

export const userVerifieApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getVerifie: build.query<IUserVerifieResponseDTO, unknown>({
      query: () => ({
        url: `${UserEndPoints.USER_VERIFIE}?__read`,
        method: 'GET',
        credentials: 'include',
      }),
      providesTags: ['UserVerifie'],
    }),
    initialVerifie: build.mutation<unknown, unknown>({
      query: () => ({
        url: `${UserEndPoints.USER_VERIFIE_SEND_INITIAL}`,
        method: 'GET',
        credentials: 'include',
      }),
      invalidatesTags: (_, error) => error ? [] : ['UserVerifie'],
    }),
    confirmInitialVerifie: build.mutation<unknown, string>({
      query: (payload) => ({
        url: `${UserEndPoints.USER_VERIFIE_CONFIRM_INITIAL}/${payload}`,
        method: 'GET',
        credentials: 'include',
      }),
      invalidatesTags: (_, error) => error ? [] : ['UserInfo'],
    }),
  })
});

export const {
  useInitialVerifieMutation: useInitialVerifie,
  useConfirmInitialVerifieMutation: useConfirmInitialVerifie,
} = userVerifieApi;

export const useGetVerifie = () => userVerifieApi.useGetVerifieQuery(null);
export const useLazyGetVerifie = () => userVerifieApi.useLazyGetVerifieQuery();

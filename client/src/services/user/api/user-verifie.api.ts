import { baseApi, IUserVerifieResponseDTO, UserEndPoints } from '~shared/api';

export const userVerifieApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getVerifie: build.query<IUserVerifieResponseDTO, unknown>({
      query: () => ({
        method: 'GET',
        url: UserEndPoints.USER_VERIFIE,
      }),
      providesTags: ['UserVerifie'],
    }),
    initialVerifie: build.mutation<unknown, unknown>({
      query: () => ({
        method: 'GET',
        url: UserEndPoints.USER_VERIFIE_SEND_INITIAL,
      }),
      invalidatesTags: (_, error) => (error ? [] : ['UserVerifie']),
    }),
    confirmInitialVerifie: build.mutation<unknown, string>({
      query: (payload) => ({
        method: 'GET',
        url: `${UserEndPoints.USER_VERIFIE_CONFIRM_INITIAL}/${payload}`,
      }),
      invalidatesTags: (_, error) => (error ? [] : ['UserInfo']),
    }),
  }),
});

export const {
  useInitialVerifieMutation: useInitialVerifie,
  useConfirmInitialVerifieMutation: useConfirmInitialVerifie,
} = userVerifieApi;

export const useGetVerifie = () => userVerifieApi.useGetVerifieQuery(null);
export const useLazyGetVerifie = () => userVerifieApi.useLazyGetVerifieQuery();

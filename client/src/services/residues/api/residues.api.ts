import { baseApi, IResidueResponseDTO, ResiduesEnpPoints } from '~shared/api';

export const residuesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getResidues: build.query<IResidueResponseDTO[], unknown>({
      query: () => ({
        method: 'GET',
        url: ResiduesEnpPoints.GET_RESIDUES,
      }),
    }),
    getResiduesMock: build.query<IResidueResponseDTO[], unknown>({
      query: () => ({
        method: 'GET',
        url: ResiduesEnpPoints.GET_RESIDUES_MOCK,
      }),
    }),
  }),
});

export const useGetResidues = () => residuesApi.useGetResiduesQuery(null);
export const useGetResiduesMock = () => residuesApi.useGetResiduesMockQuery(null);

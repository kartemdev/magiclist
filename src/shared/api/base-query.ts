import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '~shared/config';


export const baseQuery = fetchBaseQuery({
  baseUrl: config.API_BASE,
  prepareHeaders: (headers: Headers, { getState }: { getState: () => unknown }) => {
    return headers;
  },
  credentials: 'include',
});

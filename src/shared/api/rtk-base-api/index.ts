import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers: Headers, { getState }: { getState: () => unknown }) => {
    return headers;
  },
  credentials: 'include',
});

export const baseApi = createApi({
  baseQuery,
  endpoints: () => ({}),
});

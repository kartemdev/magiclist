import { BaseQueryFn, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '~shared/config';
import { SERVER_TIMEOUT, getHttpError, notyEmit } from '~shared/lib';
import { ISelfError } from './types';


export const baseQuery = fetchBaseQuery({
  baseUrl: config.API_BASE,
  prepareHeaders: (headers: Headers, { getState }) => {
    return headers;
  },
  timeout: SERVER_TIMEOUT,
  credentials: 'include',
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs, unknown, ISelfError
> = async (args, api, extraOptions) => {
  const response = await (baseQuery as BaseQueryFn<string | FetchArgs, unknown, ISelfError, {}>)(args, api, extraOptions);
  const { error = null } = response;
  
  if (error) {
    notyEmit.serverError(getHttpError({ error })?.message, error.status)
  }
  
  return response;
};

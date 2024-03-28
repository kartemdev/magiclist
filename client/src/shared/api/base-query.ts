import { createAction } from '@reduxjs/toolkit';
import { BaseQueryFn, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE, AuthEndPoints } from '~shared/config';
import {
  notyEmit,
  getHttpError,
  SERVER_TIMEOUT,
  isIncludeHttpStatuses,
  EXCLUDED_QUERY_INTERCEPTOR_ENDPOINTS,
} from '~shared/lib';

import { ISelfError } from './types';
import { IAuthResponseDTO } from './dto/auth';

export const logoutAction = createAction('auth/logout');
export const setAuthTokenAction = createAction<IAuthResponseDTO>('auth/set-auth-user');

export const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE,
  prepareHeaders: (headers: Headers, { getState }) => {
    const { accessToken } = (getState() as RootState).auth;

    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }

    return headers;
  },
  timeout: SERVER_TIMEOUT,
  credentials: 'include',
}) as BaseQueryFn<string | FetchArgs, unknown, ISelfError, {}>;

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs, unknown, ISelfError
> = async (args, api, extraOptions) => {
  const { dispatch, endpoint } = api;
  
  let response = await baseQuery(args, api, extraOptions);
  const { error = null } = response;

  if (
    isIncludeHttpStatuses(+error?.status, [401]) &&
    !EXCLUDED_QUERY_INTERCEPTOR_ENDPOINTS.includes(endpoint)
  ) {
    const refreshResponse = await baseQuery(AuthEndPoints.REFRESH, api, extraOptions)

    if (refreshResponse.data) {
      dispatch(setAuthTokenAction(refreshResponse.data as IAuthResponseDTO))

      response = await baseQuery(args, api, extraOptions);
    } else {
      dispatch(logoutAction());
    }
  }

  if (isIncludeHttpStatuses(+error?.status, [429])) {
    notyEmit.error('server_rate_limit_error')
  }

  if (error) {
    notyEmit.serverError(getHttpError({ error })?.message, error?.status);
  }
  
  return response;
};

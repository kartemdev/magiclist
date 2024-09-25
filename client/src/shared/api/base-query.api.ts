import { createAction } from '@reduxjs/toolkit';
import { BaseQueryFn, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { notyEmit } from '~shared/lib';
import { API_BASE } from '~shared/config';

import { ISelfError } from './types.api';
import { IAuthResponseDTO, AuthEndPoints } from './auth';
import { getHttpError, isIncludeHttpStatuses } from './http-utils.api';

export const EXCLUDED_QUERY_INTERCEPTOR_ENDPOINTS = ['login', 'logout', 'refresh', 'register'];

export const SERVER_TIMEOUT = 20000;

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

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, ISelfError> = async (
  args,
  api,
  extraOptions,
) => {
  const { dispatch, endpoint } = api;

  let response = await baseQuery(args, api, extraOptions);
  const { error = null } = response;

  if (
    isIncludeHttpStatuses(+error?.status, [401]) &&
    !EXCLUDED_QUERY_INTERCEPTOR_ENDPOINTS.includes(endpoint)
  ) {
    const refreshResponse = await baseQuery(AuthEndPoints.REFRESH, api, extraOptions);

    if (refreshResponse.data) {
      dispatch(setAuthTokenAction(refreshResponse.data as IAuthResponseDTO));

      response = await baseQuery(args, api, extraOptions);
    } else {
      dispatch(logoutAction());
    }
  }

  if (isIncludeHttpStatuses(+error?.status, [429])) {
    notyEmit.error('server_rate_limit_error');
  }

  if (error) {
    notyEmit.serverError(getHttpError({ error })?.message, error?.status);
  }

  return response;
};

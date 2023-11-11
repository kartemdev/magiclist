import { BaseQueryFn, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createAction } from '@reduxjs/toolkit';
import { config } from '~shared/config';
import { ApiEndPoints, EXCLUDED_QUERY_INTERCEPTOR_ENDPOINTS, SERVER_TIMEOUT, getHttpError, notyEmit } from '~shared/lib';
import { ISelfError } from './types';
import { IResponseAuthDTO } from './dto';

export const logoutAction = createAction('auth/logout');
export const setAuthUserAction = createAction<IResponseAuthDTO>('auth/set-auth-user');

export const baseQuery = fetchBaseQuery({
  baseUrl: config.API_BASE,
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

  if (error?.status === 401 && !EXCLUDED_QUERY_INTERCEPTOR_ENDPOINTS.includes(endpoint)) {
    const refreshResponse = await baseQuery(ApiEndPoints.REFRESH, api, extraOptions)

    if (refreshResponse.data) {
      dispatch(setAuthUserAction(refreshResponse.data as IResponseAuthDTO))

      response = await baseQuery(args, api, extraOptions);
    } else {
      dispatch(logoutAction());
    }
  }
  
  if (error) {
    notyEmit.serverError(getHttpError({ error })?.message, error.status)
  }
  
  return response;
};

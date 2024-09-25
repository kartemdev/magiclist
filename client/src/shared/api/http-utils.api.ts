import { SerializedError } from '@reduxjs/toolkit';

import { ISelfError, RtkErrorStatusesEnum } from './types.api';

export enum HttpStatusPrefixes {
  'INFO' = 1,
  'SUCCESSFUL' = 2,
  'REDIRECT' = 3,
  'CLIENT' = 4,
  'SERVER' = 5,
}

export interface GetHttpParamsEnum {
  error: ISelfError | SerializedError;
  statusPrefix?: HttpStatusPrefixes;
  includeStatuses?: number[];
}

export const isIncludeHttpStatuses = (status: number, includeStatuses: number[]) =>
  includeStatuses ? includeStatuses?.includes(status) : true;

export const isHttpStatus = (status: number, statusPrefix?: HttpStatusPrefixes) => {
  if (typeof status === 'number') {
    const regExpStatus = new RegExp(`^${statusPrefix || '[1-5]'}[0-9][0-9]`);
    return regExpStatus.test(status.toString());
  }
  return false;
};

export const getHttpError = ({ error, statusPrefix, includeStatuses }: GetHttpParamsEnum) => {
  let currentError;

  if (
    error &&
    'data' in error &&
    isHttpStatus(error.data.statusCode, statusPrefix) &&
    isIncludeHttpStatuses(+error.status, includeStatuses)
  ) {
    currentError = error.data;
  }

  if (error && 'error' in error) {
    if (error.status === RtkErrorStatusesEnum.TIMEOUT_ERROR) {
      currentError = { message: 'timeout_error' };
    }

    if (error.status === RtkErrorStatusesEnum.FETCH_ERROR) {
      currentError = { message: 'server_error' };
    }
  }

  return currentError;
};

import { SerializedError } from "@reduxjs/toolkit";
import { ISelfError } from "~shared/api";

export enum HttpStatusPrefixes {
  'INFO' =  1,
  'SUCCESSFUL' = 2,
  'REDIRECT' = 3,
  'CLIENT' = 4,
  'SERVER' = 5,
};

export interface GetHttpParams {
  error: ISelfError | SerializedError,
  statusPrefix?: HttpStatusPrefixes,
  includeStatuses?: number[]
};

export const isIncludeHttpStatuses = (status: number | string, includeStatuses: number[]) => (
  includeStatuses ? includeStatuses?.includes(+status) : true
);

export const isHttpStatus = (status: number | string, statusPrefix?: HttpStatusPrefixes) => {
  if (typeof status === 'number') {
    const regExpStatus = new RegExp(`^${statusPrefix || '[1-5]'}[0-9][0-9]`);
    return regExpStatus.test(status.toString());
  }
  return false
};

export const getHttpError = ({ error, statusPrefix, includeStatuses }: GetHttpParams) => {
  if (
    (error && 'data' in error) &&
    isHttpStatus(error.data.statusCode, statusPrefix) &&
    isIncludeHttpStatuses(error.status, includeStatuses)
  ) {
    return error.data;
  }
  return null;
};


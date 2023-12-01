export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
};

export enum RtkErrorStatusesEnum {
  FETCH_ERROR='FETCH_ERROR',
  TIMEOUT_ERROR='TIMEOUT_ERROR',
};

export const EXCLUDED_QUERY_INTERCEPTOR_ENDPOINTS =  [
  'login',
  'logout',
  'refresh',
  'register',
];

export const SERVER_TIMEOUT = 10000;

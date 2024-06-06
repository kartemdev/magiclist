export enum RtkErrorStatusesEnum {
  FETCH_ERROR='FETCH_ERROR',
  TIMEOUT_ERROR='TIMEOUT_ERROR',
};

export interface RtkQueryCallbacks<TData = unknown> {
  onSuccess?: () => void;
  onError?: () => void;
  data?: TData;
}

export interface ISelfError {
  status: string | number;
  error?: string;
  data?: {
    statusCode: number;
    message: string;
  }
}

export enum RtkErrorStatusesEnum {
  FETCH_ERROR='FETCH_ERROR',
  TIMEOUT_ERROR='TIMEOUT_ERROR',
}

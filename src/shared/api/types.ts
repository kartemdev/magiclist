export interface ISelfError {
  status: string | number;
  error?: string;
  data?: {
    statusCode: number;
    message: string;
  }
}

export interface IPayloadLoginDTO {
  email: string;
  password: string;
}

export interface IPayloadRegisterDTO {
  email: string;
  userName: string;
  password: string;
}

export interface IPayloadRefreshTokensDTO {
  userName: string;
}

export interface IResponseAuthDTO {
  userName: string;
  email: string;
  accessToken: string;
}

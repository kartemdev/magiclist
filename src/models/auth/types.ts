export interface IPayloadLoginDto {
  email: string;
  password: string;
};

export interface IPayloadRegisterDto {
  email: string,
  userName: string,
  password: string,
};

export interface IPayloadRefreshTokensDto {
  userName: string;
};

export interface IResponseAuthDto {
  userName: string;
  email: string;
  accessToken: string;
};

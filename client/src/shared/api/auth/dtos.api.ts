// ---------- RequestDTOs ----------

export interface ILoginRequestDTO {
  email: string;
  password: string;
}

export interface IRegisterRequestDTO {
  email: string;
  userName: string;
  password: string;
}

export interface IRefreshTokensRequestDTO {
  userName: string;
}

// ---------- ResponsetDTOs ----------

export interface IAuthResponseDTO {
  accessToken: string;
}

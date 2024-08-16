// ---------- RequestDTOs ----------

export interface IUpdateUserInfoRequestDTO {
  userName?: string;
  email?: string;
}

// ---------- ResponseDTOs ----------

export interface IUserInfoResponseDTO {
  id: number;
  userName: string;
  email: string;
  registerDate: string;
  isVerified: boolean;
}

export interface IUserVerifieResponseDTO {
  createdAt: string;
  isExpiresVerifie: boolean;
}

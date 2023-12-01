// ---------- RequestDTOs ----------

export interface IUpdateUserInfoRequestDTO {
  userName: string;
}

// ---------- ResponseDTOs ----------

export interface IUserInfoResponseDTO {
  id: number;
  userName: string;
  email: string;
  registerDate: string;
}

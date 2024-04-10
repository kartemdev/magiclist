import { IUserInfoResponseDTO } from "~shared/api";

import { IUserState } from "../types";

export const matchReducer = (state: IUserState, payload: IUserInfoResponseDTO) => {
  state.id = payload.id;
  state.userName = payload.userName;
  state.email = payload.email;
  state.isVerified = payload.isVerified;
  state.registerDate = payload.registerDate;
};

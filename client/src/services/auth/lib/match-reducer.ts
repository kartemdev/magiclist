import { IAuthResponseDTO } from '~shared/api';
import { IAuthState } from '../types';

export const matchReducer = (state: IAuthState, payload: IAuthResponseDTO) => {
  if (payload.accessToken) {
    state.accessToken= payload.accessToken;
  }
};

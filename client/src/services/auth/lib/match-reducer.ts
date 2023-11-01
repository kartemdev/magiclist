import { IResponseAuthDTO } from '~shared/api';
import { IAuthState } from '../types';

export const matchReducer = (state: IAuthState, payload: IResponseAuthDTO) => {
  if (payload.accessToken) {
    state.email = payload.email;
    state.userName = payload.userName;
    state.accessToken= payload.accessToken;
  }
};

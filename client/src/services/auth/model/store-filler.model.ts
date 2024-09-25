import { IAuthResponseDTO } from '~shared/api';

import { IAuthState } from './types.model';

export const storeFiller = (state: IAuthState, payload: IAuthResponseDTO) => {
  if (payload.accessToken) {
    state.accessToken = payload.accessToken;
  }
};

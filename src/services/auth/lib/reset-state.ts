import { IAuthState } from '../types';

export const resetState = (state: IAuthState) => {
  state.email = '';
  state.userName = '';
  state.accessToken= null;
};

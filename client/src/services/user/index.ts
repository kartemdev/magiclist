export {
  userApi,
  useGetUserInfo,
  useLazyGetUserInfo,
  useUpdateUserInfo,
  useLazyGetVerifie,
  useGetVerifie,
  useVerifieUser,
  useConfirmVerifieUser,
} from './api/user.api';

export {
  userSlice,
  selectIsVerifiedUser,
} from './store/slice';

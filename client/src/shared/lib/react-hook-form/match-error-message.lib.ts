import { ErrorOption } from 'react-hook-form';
import { SerializedError } from '@reduxjs/toolkit';

import { ISelfError, HttpStatusPrefixes, getHttpError } from '~shared/api';

export const matchErrorMessage = <T extends object>(
  error: ISelfError | SerializedError,
  formErrors: Record<string, Key<T>>,
): [Key<T>, ErrorOption] => {
  const httpErrorMessage = getHttpError({
    error,
    statusPrefix: HttpStatusPrefixes.CLIENT,
  })?.message;

  if (!formErrors[httpErrorMessage]) {
    return null;
  }

  return [formErrors[httpErrorMessage], { message: window.translate(httpErrorMessage) }];
};

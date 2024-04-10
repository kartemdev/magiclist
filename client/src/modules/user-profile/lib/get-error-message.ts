import { SerializedError } from "@reduxjs/toolkit";

import { ISelfError } from "~shared/api";
import { HttpStatusPrefixes, getHttpError } from "~shared/lib";

export const getErrorMessage = (error: ISelfError | SerializedError): [string, { message: string }] => {
  const httpError = getHttpError({ error, statusPrefix: HttpStatusPrefixes.CLIENT });

  if (httpError) {
    let errorField;

    switch(httpError.message) {
      case 'user_name_already_exists':
        errorField = 'userName';
        break;

      default: 
        errorField = null;
        break;
    }

    return errorField ? [errorField, { message: window.translate(httpError.message) }] : null;
  }

  return null;
};

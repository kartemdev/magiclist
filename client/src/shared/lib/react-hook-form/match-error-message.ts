import { ErrorOption } from "react-hook-form";
import { SerializedError } from "@reduxjs/toolkit";

import { ISelfError } from "~shared/api";

import { HttpStatusPrefixes, getHttpError } from "../http";

export const matchErrorMessage = (
  error: ISelfError | SerializedError,
  errors: Record<string, string>
): [string, ErrorOption] => {
  const httpErrorMessage = getHttpError({ error, statusPrefix: HttpStatusPrefixes.CLIENT })?.message as keyof typeof errors;
  
  if (!errors[httpErrorMessage as keyof typeof errors]) {
    return null;
  }

  return  [errors[httpErrorMessage], { message: window.translate(httpErrorMessage) }];
};

import i18next from 'i18next';
import { toast } from 'react-toastify';
import { HttpStatusPrefixes, isHttpStatus } from './http';

export enum NotyEmitterTypes {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
};


function createToaster(value: string, type?: NotyEmitterTypes) {
  (!type ? toast : toast[type])(i18next.t(value), {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "colored",
  })
}

export function notyEmit(value: string) {
  createToaster(value);
}

notyEmit.success = (value: string) => {
  createToaster(value, NotyEmitterTypes.SUCCESS);
};

notyEmit.error = (value: string) => {
  createToaster(i18next.t(value), NotyEmitterTypes.ERROR);
}

notyEmit.serverError = (value: string, status: string | number) => {
  if (typeof status === 'string' || isHttpStatus(status, HttpStatusPrefixes.SERVER)) {
    createToaster(i18next.t(value), NotyEmitterTypes.ERROR);
  }
};

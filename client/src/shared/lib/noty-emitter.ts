import i18next from 'i18next';
import { ToastOptions, toast } from 'react-toastify';

import { HttpStatusPrefixes, isHttpStatus } from './http';

export enum NotyEmitterTypes {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
};

function createToaster(value: string, type?: NotyEmitterTypes, options: ToastOptions = {}) {
  const currentToast = !type ? toast : toast[type];
  const toasOptions: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "colored",
    ...options,
  }
  currentToast(i18next.t(value), toasOptions);
};

export function notyEmit(value: string, type?: NotyEmitterTypes, options?: ToastOptions) {
  createToaster(value, type, options);
}

notyEmit.success = (value: string, options?: ToastOptions) => {
  createToaster(i18next.t(value), NotyEmitterTypes.SUCCESS, options);
};

notyEmit.info = (value: string, options?: ToastOptions) => {
  createToaster(i18next.t(value), NotyEmitterTypes.INFO, options);
}

notyEmit.error = (value: string, options?: ToastOptions) => {
  createToaster(i18next.t(value), NotyEmitterTypes.ERROR, options);
};

notyEmit.serverError = (value: string, status: string | number, options?: ToastOptions) => {
  if (typeof status === 'string' || isHttpStatus(status, HttpStatusPrefixes.SERVER)) {
    createToaster(i18next.t(value), NotyEmitterTypes.ERROR, options);
  }
};

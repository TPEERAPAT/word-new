import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

export const OcareToast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};

type Status = 'success' | 'error' | 'warning' | 'info' | 'default';

export const ShowToast = (status: Status, message: string) => {
  switch (status) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    case 'info':
      toast.info(message);
      break;
    case 'warning':
      toast.warn(message);
      break;
    case 'default':
      toast(message);
      break;
    default:
      toast(message);
      break;
  }
};

import * as actionTypes from './types';


export const showAlert = (message, status) => {
  return {
    type: actionTypes.SHOW_ALERT,
    message,
    status
  };
};

export const hideAlert = () => {
  return {
    type: actionTypes.HIDE_ALERT,
  };
};

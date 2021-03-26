import * as actionTypes from './types';


export const showAlert = message => {
  return {
    type: actionTypes.SHOW_ALERT,
    message,
  };
};

export const hideAlert = () => {
  return {
    type: actionTypes.HIDE_ALERT,
  };
};

import * as actionTypes from './types';


export const showAlert = (message, status) => ({
  type: actionTypes.SHOW_ALERT,
  message,
  status
})

export const hideAlert = () => ({
  type: actionTypes.HIDE_ALERT,
})
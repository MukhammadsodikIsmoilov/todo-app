import * as actionTypes from './types';

const initialState = {
  message: '',
  visibility: false,
  status: null
};

export const alert = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_ALERT:
      return {
        ...state,
        message: action.message,
        status: action.status,
        visibility: true,
      };
    case actionTypes.HIDE_ALERT:
      return {
        ...state,
        status: '',
        visibility: false,
      };
    default:
      return state;
  }
};

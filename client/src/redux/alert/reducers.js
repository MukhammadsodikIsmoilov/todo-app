import * as actionTypes from './types';

const initialState = {
  message: '',
  visibility: false,
};

export const alert = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_ALERT:
      return {
        ...state,
        message: action.message,
        visibility: true,
      };
    case actionTypes.HIDE_ALERT:
      return {
        ...state,
        visibility: false,
      };
    default:
      return state;
  }
};

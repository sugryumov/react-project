import * as constants from '../constants';

const initialState = {
  newUserLogin: null,
  newUserPassword: '',
  isRegitration: false,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case constants.USER_INPUT_REGISTRATION_CHANGED_LOG:
      return {
        ...state,
        newUserLogin: action.payload
      }

    case constants.USER_INPUT_REGISTRATION_CHANGED_PASS:
      return {
        ...state,
        newUserPassword: action.payload
      }

    case constants.USER_REGISTRATION:
      return {
        ...state,
        isRegitration: action.payload
      }
  }

  return state;
}
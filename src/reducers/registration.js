import { NEW_USER_INPUT_CHANGED_LOGIN, USER_INPUT_CHANGED_PASSWORD, USER_REGISTRATION } from '../constants';

const initialState = {
  newUserLogin: null,
  newUserPassword: null,
  isRegistrataion: false,
  errorEmptyField: false
}

export function registrationReducer(state = initialState, action) {

  switch(action.type) {
    case NEW_USER_INPUT_CHANGED_LOGIN:
      return {
        ...state,
        newUserLogin: action.payload
      }

    case USER_INPUT_CHANGED_PASSWORD:
      return {
        ...state,
        newUserPassword: action.payload
      }

    case USER_REGISTRATION:
      return {
        ...state,
        isRegistrataion: action.payload,
        errorEmptyField: action.error,
      }
  }

  return state;
}
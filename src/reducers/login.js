import * as constant from '../constants';

const initialState = {
  userLogin: null,
  userPassword: null,
  isLoggedIn: false,
  error: false,
  newUserLogin: null,
  newUserPassword: null,
  isRegistrataion: false,
  errorEmptyField: false
}

export function loginReducer(state = initialState, action) {

  switch(action.type) {
    case constant.USER_INPUT_CHANGED_LOGIN:
      return {
        ...state,
        userLogin: action.payload
      }

    case constant.USER_INPUT_CHANGED_PASSWORD:
      return {
        ...state,
        userPassword: action.payload
      }

    case constant.USER_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
        error: action.error
      }

    case constant.USER_LOG_OUT:
      return {
        ...state,
        isLoggedIn: action.payload,
        error: false,
        userLogin: null,
        userPassword: null,
        isRegistrataion: false
      }

    case constant.NEW_USER_INPUT_CHANGED_LOGIN:
      return {
        ...state,
        newUserLogin: action.payload
      }

    case constant.NEW_USER_INPUT_CHANGED_PASSWORD:
      return {
        ...state,
        newUserPassword: action.payload
      }

    case constant.USER_REGISTRATION:
      return {
        ...state,
        isRegistrataion: action.payload,
        errorEmptyField: action.error
      }
  }

  return state;
}
import { USER_INPUT_CHANGED_LOGIN, USER_INPUT_CHANGED_PASSWORD, USER_LOGGED_IN, USER_LOG_OUT } from '../constants';

const initialState = {
  userLogin: null,
  userPassword: null,
  isLoggedIn: false,
  error: false,
}

export function loginReducer(state = initialState, action) {

  switch(action.type) {
    case USER_INPUT_CHANGED_LOGIN:
      return {
        ...state,
        userLogin: action.payload
      }

    case USER_INPUT_CHANGED_PASSWORD:
      return {
        ...state,
        userPassword: action.payload
      }

    case USER_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload,
        error: action.error
      }

    case USER_LOG_OUT:
      return {
        ...state,
        isLoggedIn: action.payload,
        error: false,
        userLogin: null,
        userPassword: null,
        isRegistrataion: false
      }
  }

  return state;
}
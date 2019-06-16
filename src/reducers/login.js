import * as constants from '../constants';

const initialState = {
  userLogin: null,
  userPassword: '',
  isLoggedIn: false,
};

export default function(state = initialState, action) {

  switch(action.type) {
    case constants.USER_INPUT_LOGIN_CHANGED_LOG: {
      return {
        ...state,
        userLogin: action.payload,
      };
    }

    case constants.USER_INPUT_LOGIN_CHANGED_PASS: {
      return {
        ...state,
        userPassword: action.payload
      }
    }

    case constants.USER_LOGGED_IN: {
      return {
        ...state,
        isLoggedIn: action.payload
      }
    }
  }

  return state;
}

 
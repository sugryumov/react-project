import { USER_INPUT_LOGIN_CHANGED_LOG, USER_INPUT_LOGIN_CHANGED_PASS, USER_LOGGED_IN} from '../constants';

const initialState = {
  userLogin: null,
  userPassword: '',
  isLoggedIn: false,
};

export default function(state = initialState, action) {

  switch(action.type) {
    case USER_INPUT_LOGIN_CHANGED_LOG: {
      return {
        ...state,
        userLogin: action.payload,
      };
    }

    case USER_INPUT_LOGIN_CHANGED_PASS: {
      return {
        ...state,
        userPassword: action.payload
      }
    }

    case USER_LOGGED_IN: {
      return {
        ...state,
        isLoggedIn: action.payload
      }
    }
  }

  return state;
}

 
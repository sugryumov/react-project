import * as constants from '../constants';
import registeredUsers from '../registeredUsers'

const actions = {
  saveNameInputValue(value) {
    return {
      type: constants.USER_INPUT_LOGIN_CHANGED_LOG,
      payload: value,
    };
  },

  savePasswordInputValue(value) {
    return {
      type: constants.USER_INPUT_LOGIN_CHANGED_PASS,
      payload: value,
    };
  },

  onLogin(loginInputValue, passwordInputValue) {
    const isRegisteredUser = registeredUsers.find(function(userData) {
      return userData.login === loginInputValue && userData.password === passwordInputValue
    });
    
    return {
      type: constants.USER_LOGGED_IN,
      payload: isRegisteredUser
    }
  }
}

export default actions;

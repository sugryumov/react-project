import { USER_INPUT_CHANGED_LOGIN, USER_INPUT_CHANGED_PASSWORD, USER_LOGGED_IN, USER_LOG_OUT } from '../constants';

const actionLogin = {
  saveLoginInputValue(value) {
    return {
      type: USER_INPUT_CHANGED_LOGIN,
      payload: value
    }
  },

  savePasswordInputValue(value) {
    return {
      type: USER_INPUT_CHANGED_PASSWORD,
      payload: value
    }
  },

  onLogin(saveLoginInputValue, savePasswordInputValue, user) {
    const isRegisteredUser = user.find(userData => {
      return saveLoginInputValue === userData.username && savePasswordInputValue === 'qwerty'
    });

    const errorField = user.find(userData => {
      return saveLoginInputValue !== userData.username || savePasswordInputValue !== 'qwerty'
    });

    return {
      type: USER_LOGGED_IN,
      payload: isRegisteredUser,
      error: errorField
    }
  },

  logOut() {
    sessionStorage.removeItem('userList');

    return {
      type: USER_LOG_OUT,
      payload: false
    }
  }
}

export default actionLogin;

import * as constant from '../constants';

const actionLogin = {
  saveLoginInputValue(value) {
    return {
      type: constant.USER_INPUT_CHANGED_LOGIN,
      payload: value
    }
  },

  savePasswordInputValue(value) {
    return {
      type: constant.USER_INPUT_CHANGED_PASSWORD,
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
      type: constant.USER_LOGGED_IN,
      payload: isRegisteredUser,
      error: errorField
    }
  },

  logOut() {
    return {
      type: constant.USER_LOG_OUT,
      payload: false
    }
  },

  saveNewLoginInputValue(value) {
    return {
      type: constant.NEW_USER_INPUT_CHANGED_LOGIN,
      payload: value
    }
  },

  saveNewPasswordInputValue(value) {
    return {
      type: constant.NEW_USER_INPUT_CHANGED_PASSWORD,
      payload: value
    }
  },

  onRegistration(saveNewLoginInputValue, saveNewPasswordInputValue, user) {
    const emptyValueError = saveNewLoginInputValue === null || saveNewPasswordInputValue === null;

    const existsUser = user.some(userName => {
      return saveNewLoginInputValue === userName.username
    });

    if (!emptyValueError && !existsUser) {
      user.push({
        username: saveNewLoginInputValue
      })
    };

    const isRegistration = !emptyValueError && !existsUser;

    return {
      type: constant.USER_REGISTRATION,
      payload: isRegistration,
      error: emptyValueError,
      existsUser: existsUser
    }
  },
}

export default actionLogin;

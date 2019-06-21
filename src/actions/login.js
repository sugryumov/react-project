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
    // sessionStorage.removeItem('userList');

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
    const emptyValue = saveNewLoginInputValue !== null && saveNewPasswordInputValue !== null;
    const emptyValueError = saveNewLoginInputValue === null || saveNewPasswordInputValue === null;

    if (emptyValue) {
      user.push({
        username: saveNewLoginInputValue
      })
    }

    // sessionStorage.setItem("userList", newUser);

    return {
      type: constant.USER_REGISTRATION,
      payload: emptyValue,
      error: emptyValueError,
    }
  },
}

export default actionLogin;

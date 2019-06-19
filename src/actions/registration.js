import { NEW_USER_INPUT_CHANGED_LOGIN, USER_INPUT_CHANGED_PASSWORD, USER_REGISTRATION } from '../constants';

const actionRegistration = {
  saveNewLoginInputValue(value) {
    return {
      type: NEW_USER_INPUT_CHANGED_LOGIN,
      payload: value
    }
  },

  saveNewPasswordInputValue(value) {
    return {
      type: USER_INPUT_CHANGED_PASSWORD,
      payload: value
    }
  },

  onRegistration(saveNewLoginInputValue, saveNewPasswordInputValue, user) {
    const emptyValue = saveNewLoginInputValue !== null && saveNewPasswordInputValue !== null;
    const emptyValueError = saveNewLoginInputValue === null || saveNewPasswordInputValue === null;

    const newUser = user

    if (emptyValue) {
      newUser.push({
        username: saveNewLoginInputValue
      })
    }

    sessionStorage.setItem("userList", newUser);

    return {
      type: USER_REGISTRATION,
      payload: emptyValue,
      error: emptyValueError,
    }
  },
}

export default actionRegistration;

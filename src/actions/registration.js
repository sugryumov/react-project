import * as constants from '../constants';
import registeredUsers from '../registeredUsers'

const actions = {
  saveNameInputValueNewUser(value) {
    return {
      type: constants.USER_INPUT_REGISTRATION_CHANGED_LOG,
      payload: value
    }
  },

  savePasswordInputValueNewUser(value) {
    return {
      type: constants.USER_INPUT_REGISTRATION_CHANGED_PASS,
      payload: value,
    };
  },

  newUser(newLoginInputValue, newPasswordInputValue) {
    registeredUsers.push({
      login: newLoginInputValue,
      password: newPasswordInputValue
    })

    const registrationNewUser = newLoginInputValue !== '' && newPasswordInputValue !== '';

    return {
      type: constants.USER_REGISTRATION,
      payload: registrationNewUser,
    };
  },
}

export default actions;

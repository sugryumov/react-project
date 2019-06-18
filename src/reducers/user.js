import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILED } from '../constants';

const initialState = {
  user: [],
  isLoading: false,
  errMsg: '',
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case GET_USERS_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      }

    case GET_USERS_FAILED:
      return {
        ...state,
        errMsg: action.payload,
        isLoading: false
      }
  }

  return state;
}
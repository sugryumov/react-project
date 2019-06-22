import { NAVIGATION, NAVIGATION_OPEN } from '../constants';

const initialState = {
  showMenu: false,
}

export function navigationReducer(state = initialState, action) {

  switch(action.type) {
    case NAVIGATION_OPEN:
      return {
        ...state,
        showMenu: action.payload
      }

    case NAVIGATION:
      return {
        ...state,
        showMenu: !state.showMenu
      }
  }

  return state;
};

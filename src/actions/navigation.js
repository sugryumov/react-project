import { NAVIGATION, NAVIGATION_OPEN } from '../constants';

const navgationAction = {
  closeNavigationMobile() {
    const lWidth = window.screen.width;

    if (lWidth <= 900) {
      return {
        type: NAVIGATION_OPEN,
        payload: false
      }
    }

    return {
      type: NAVIGATION_OPEN,
      payload: true
    }
  },

  openNavigation() {
    return {
      type: NAVIGATION,
      payload: true
    }
  },
}

export default navgationAction;

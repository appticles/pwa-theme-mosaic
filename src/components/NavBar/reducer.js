import { MENU_OPEN, MENU_CLOSE } from './action';

export const INITIAL_STATE = false;

export default function (state = false, action) {
  switch (action.type) {
  case MENU_OPEN:
    return true;
  case MENU_CLOSE:
    return false;
  default:
    return state;
  }
}

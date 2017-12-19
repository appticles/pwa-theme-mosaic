import navBar, { INITIAL_STATE } from '../reducer';
import { openMenu, closeMenu } from '../action';

describe('NavBar reducer', () => {
  it('returns the same state on an unhandled action', () => {
    expect(navBar(INITIAL_STATE, { type: '_NULL' })).toMatchSnapshot();
  });

  it('handles OPEN_MENU action', () => {
    expect(navBar(INITIAL_STATE, openMenu())).toMatchSnapshot();
  });

  it('handles CLOSE_MENU action', () => {
    expect(navBar(INITIAL_STATE, closeMenu())).toMatchSnapshot();
  });
});

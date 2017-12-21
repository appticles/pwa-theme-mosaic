import React from 'react';
import renderer from 'react-test-renderer';

import mockStore from '../../../configureMockStore';

import NavBar from '../index';

describe('Navbar component', () => {
  it('should render correctly', () => {
    const store = mockStore({
      navbar: true,
    });

    expect(renderer.create(<NavBar store={store} openMenu={jest.fn()} />)).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import CategoriesList from './index';

describe('Categories list', () => {
  it('should render correctly', () => {
    const mockCategoriesList = [
      {
        slug: 'mock-slug',
        id: 1,
        name: 'Some mock name',
      },
      {
        slug: 'mock-slug',
        id: 2,
        name: 'Some other mock name',
      },
      {
        slug: 'mock-slug',
        id: 3,
        name: 'Some name',
      },
      {
        slug: 'mock-slug',
        id: 4,
        name: 'Mock name',
      },
      {
        slug: 'mock-slug',
        id: 5,
        name: 'Some other other mock name',
      },
      {
        slug: 'mock-slug',
        id: 6,
        name: 'Some other other mock name',
      },
      {
        slug: 'mock-slug',
        id: 7,
        name: 'Some other other mock name',
      },
      {
        slug: 'mock-slug',
        id: 8,
        name: 'Some other other mock name',
      },
    ];

    const output = shallow(<CategoriesList categoriesChunk={mockCategoriesList} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

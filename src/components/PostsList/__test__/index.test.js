import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import PostsList from '../index';

describe('Posts list', () => {
  it('should render correctly', () => {
    const mockPosts = [
      {
        id: 1,
        title: {
          rendered: 'Mock title',
        },
        author: 55,
        categories: [43, 54, 23],
        slug: 'mock-slug',
        content: {
          rendered: 'Some mock content to be rendered',
          protected: false,
        },
        excerpt: {
          rendered: 'Some mock exceprt to be rendered',
          protected: true,
        },
        date: 'some mock date',
        _embedded: {
          'wp:featuredmedia': 'someMockImageUrl',
        },
      },
      {
        id: 2,
        title: {
          rendered: 'Mock title',
        },
        author: 55,
        categories: [43, 54, 23],
        slug: 'mock-slug',
        content: {
          rendered: 'Some mock content to be rendered',
          protected: false,
        },
        excerpt: {
          rendered: 'Some mock exceprt to be rendered',
          protected: true,
        },
        date: 'some mock date',
        _embedded: {
          'wp:featuredmedia': 'someMockImageUrl',
        },
      },
    ];
    const output = shallow(<PostsList postsList={mockPosts} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

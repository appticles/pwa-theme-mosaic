import React from 'react';
import renderer from 'react-test-renderer';

import mockStore from '../../../configureMockStore';

import PageDetails from '../PageDetails';

describe('Page screen', () => {
  it('should render correctly an existing page', () => {
    const store = mockStore({
      pages: {
        items: [
          {
            id: 1,
            parent: 32,
            title: {
              rendered: 'Some page tile',
            },
            slug: 'some-page-slug',
            content: {
              rendered: 'Some page content ot be rendered',
            },
            link: 'some-page-link',
            author: 54,
            comment_status: 'dunno',
            featured_media: 43,
            status: 'some-status',
          },
        ],
        isFetching: 1,
      },
      sideMenuVisible: true,
      page: {
        id: 1,
        parent: 32,
        title: {
          rendered: 'Some page tile',
        },
        slug: 'some-page-slug',
        content: {
          rendered: 'Some page content ot be rendered',
        },
        link: 'some-page-link',
        author: 54,
        comment_status: 'dunno',
        featured_media: 43,
        status: 'some-status',
      },
      match: {
        params: {
          postId: 'some-post-id',
        },
      },
    });
    expect(renderer.create(<PageDetails store={store} fetchPosts={jest.fn()} />)).toMatchSnapshot();
  });
});

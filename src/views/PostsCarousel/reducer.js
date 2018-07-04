import { combineReducers } from 'redux';
import Immutable from 'seamless-immutable';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { REQUEST_POSTS, RECEIVE_POSTS } from './action';

export const postPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.shape({
    rendered: PropTypes.string.isRequired,
  }).isRequired,
  author: PropTypes.number.isRequired,
  categories: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  slug: PropTypes.string.isRequired,
  content: PropTypes.shape({
    rendered: PropTypes.string.isRequired,
    protected: PropTypes.bool.isRequired,
  }).isRequired,
  excerpt: PropTypes.shape({
    rendered: PropTypes.string.isRequired,
    protected: PropTypes.bool.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired, //TO DO : date validation => class Date
  // TO DO : proptype for image src (_embedded params)
});

export const INITIAL_STATE = Immutable({
  items: [],
  isFetching: 0,
  loadMore: true,
});

const items = (state = INITIAL_STATE.items, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return state;
    case RECEIVE_POSTS:
      if (Array.isArray(action.posts)) {
        return _.unionBy(state, action.posts, 'id');
      }
      return _.unionBy(state, [action.posts], 'id');
    default:
      return state;
  }
};

const loadMore = (state = INITIAL_STATE.loadMore, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return true;
    case RECEIVE_POSTS:
      if (Array.isArray(action.posts)) {
        return !(action.posts.length < 10);
      }
      return state;
    default:
      return state;
  }
};

const isFetching = (state = INITIAL_STATE.isFetching, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return state + 1;
    case RECEIVE_POSTS:
      return state - 1;
    default:
      return state;
  }
};

export const getPosts = state => state.items;
export const getPostsByCategory = (state, categoryId) =>
  state.items.filter(post => post.categories.indexOf(Number(categoryId)) !== -1);

export const getLoadMorePosts = state => state.loadMore;
export const getPostsFetching = state => state.isFetching;

/**
 * Check the password protected status for a post.
 * Returns true if the post does not exist in the state.
 *
 * @param {Object} state
 * @param {Number} postId
 */
export const getPostProtectedStatus = (state, postId) => {
  if (!_.isEmpty(state.items)) {
    const post = _.find(state.items, postItem => Number(postItem.id) === Number(postId));

    return !_.isNil(post) ? post.content.protected : true;
  }

  return true;
};

export default combineReducers({
  items,
  isFetching,
  loadMore,
});

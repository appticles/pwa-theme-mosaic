import categories, { INITIAL_STATE, getCategories, getCategoriesFetching } from './reducer';
import { requestCategories, receiveCategories } from './action';

describe('Categories reducer', () => {
  it('returns the same state on an unhandled action', () => {
    expect(categories(INITIAL_STATE, { type: '_NULL' })).toMatchSnapshot();
  });
  it('handles REQUEST_CATEGORIES action', () => {
    const categoriesList = {
      isFetching: 0,
      items: [
        {
          name: 'Nice one',
        },
        {
          name: 'Nicer one',
        },
        {
          name: 'Nicest one',
        },
      ],
    };

    expect(categories(categoriesList, requestCategories())).toMatchSnapshot();
  });
  it('handles RECEIVE_CATEGORIES action', () => {
    const categoriesList = {
      isFetching: 1,
      items: [
        {
          name: 'Nice one',
        },
        {
          name: 'Nicer one',
        },
        {
          name: 'Nicest one',
        },
      ],
    };
    expect(categories(categoriesList, receiveCategories(categoriesList))).toMatchSnapshot();
  });

  // reducer functions
  it('getCategoriesFetching returns state.isFetching', () => {
    const state = {
      isFetching: 4,
    };
    expect(getCategoriesFetching(state)).toBe(4);
  });
  it('getCategories returns state.items', () => {
    const state = {
      items: [
        {
          name: 'Nice one',
        },
      ],
    };
    expect(getCategories(state)).toBe(state.items);
  });
});

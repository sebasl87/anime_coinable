/* eslint-disable no-undef */
import * as actions from './actions';
import * as animesTypes from './actionTypes';

describe('animes actions', () => {
  it('fetchAnimes', () => {
    const expectedAction = {
      type: animesTypes.FETCH_ANIMES,
    };

    expect(actions.fetchAnimes()).toEqual(expectedAction);
  });

  it('successFetchAnimesData', () => {
    const expectedAction = {
      type: animesTypes.SUCCESS_FETCH_ANIMES_DATA,
      payload: {},
    };
    expect(actions.successFetchAnimesData({})).toEqual(expectedAction);
  });

  it('successFetchAnimesPagination', () => {
    const expectedAction = {
      type: animesTypes.SUCCESS_FETCH_ANIMES_PAGINATION,
      payload: {},
    };
    expect(actions.successFetchAnimesPagination({})).toEqual(expectedAction);
  });

  it('successFetchAnimesLinks', () => {
    const expectedAction = {
      type: animesTypes.SUCCESS_FETCH_ANIMES_LINKS,
      payload: {},
    };
    expect(actions.successFetchAnimesLinks({})).toEqual(expectedAction);
  });

  it('successFetchSearchAnimesData', () => {
    const expectedAction = {
      type: animesTypes.SUCCESS_FETCH_SEARCH_ANIMES_DATA,
      payload: {},
    };
    expect(actions.successFetchSearchAnimesData({})).toEqual(expectedAction);
  });
});

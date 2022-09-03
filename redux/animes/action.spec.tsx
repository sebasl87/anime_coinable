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

  it('successFetchAnimes', () => {
    const expectedAction = {
      type: animesTypes.SUCCESS_FETCH_ANIMES,
    };
    expect(actions.successFetchAnimes({})).toEqual(expectedAction);
  });
});

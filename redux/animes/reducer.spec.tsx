import * as animesTypes from './actionTypes';
import reducer, { initialState } from './index';

describe('common reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('should fetch animes', () => {
    expect(
      reducer(undefined, {
        type: animesTypes.FETCH_ANIMES,
      })
    ).toEqual(initialState);
  });
  it('should set animes to data', () => {
    expect(
      reducer(
        { ...initialState},
        {
          type: animesTypes.SUCCESS_FETCH_ANIMES_DATA,
          payload: "data_from_fetch"
        }
      )
    ).toEqual({
      ...initialState,
      animeList: "data_from_fetch"
    });
  });
});

import * as animesTypes from './actionTypes';
import * as animesServices from '@services/animes';

export const fetchAnimes = () => ({
  type: animesTypes.FETCH_ANIMES,
});

export const successFetchAnimesData = payload => ({
  type: animesTypes.SUCCESS_FETCH_ANIMES_DATA,
  payload,
});

export const successFetchAnimesPagination = payload => ({
  type: animesTypes.SUCCESS_FETCH_ANIMES_PAGINATION,
  payload,
});

export const successFetchAnimesLinks = payload => ({
  type: animesTypes.SUCCESS_FETCH_ANIMES_LINKS,
  payload,
});

export const getAnimesByPopularity =
  (page = 1) =>
  dispatch => {
    dispatch(fetchAnimes);
    animesServices
      .fetchAnimes(page)
      .then(resp => dispatch(successFetchAnimesData(resp?.data)))
      .then(resp => dispatch(successFetchAnimesPagination(resp?.pagination)))
      .then(resp => dispatch(successFetchAnimesLinks(resp?.links)));
  };

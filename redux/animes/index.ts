import * as animesTypes from './actionTypes';

export const initialState = {
  animeList: null,
  pagination: null,
  links: null,
};

const animesReducer = (state = initialState, action) => {
  switch (action.type) {
    case animesTypes.FETCH_ANIMES:
      return {
        ...state,
      };

    case animesTypes.SUCCESS_FETCH_ANIMES_DATA:
      return {
        ...state,
        animeList: action.payload,
      };

    case animesTypes.SUCCESS_FETCH_ANIMES_PAGINATION:
      return {
        ...state,
        pagination: action.payload,
      };

    case animesTypes.SUCCESS_FETCH_ANIMES_LINKS:
      return {
        ...state,
        links: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default animesReducer;

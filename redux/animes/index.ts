import * as animesTypes from './actionTypes';

export const initialState = {
  animeList: null,
  animeSearchListed:null,
  links: null,
  pagination: null,
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

      case animesTypes.FETCH_SEARCH_ANIMES:
        return {
          ...state,
        };
  
      case animesTypes.SUCCESS_FETCH_SEARCH_ANIMES_DATA:
        return {
          ...state,
          animeSearchListed: action.payload,
        };
        
    default:
      return {
        ...state,
      };
  }
};

export default animesReducer;

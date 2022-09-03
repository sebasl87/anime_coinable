import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import {
  getAnimesByPopularity,

} from '@redux/animes/actions';

export const useAnimes = () => {
  const dispatch = useDispatch();

  const getFetchData = (page?: number) => {
    dispatch(getAnimesByPopularity(page | 1) as unknown as AnyAction);
  };

  return {
    getFetchData,
  };
};

export default useAnimes;

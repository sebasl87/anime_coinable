import { combineReducers } from 'redux';
import animesReducer from './animes';

const rootReducer = combineReducers({
  animes: animesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

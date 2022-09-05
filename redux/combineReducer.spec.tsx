import { createStore } from 'redux';
import rootReducer from './combineReducer';
import animesReducer from './animes';

describe('test for rootReducer', () => {
  const store = createStore(rootReducer);
  it('reducers', () => {
    expect(store.getState().animes).toEqual(animesReducer(undefined, {}));
  });
});

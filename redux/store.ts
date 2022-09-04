import { createStore, applyMiddleware, compose, Store } from 'redux';


import thunk from 'redux-thunk';
import rootReducer from './combineReducer';
import { createWrapper } from "next-redux-wrapper"

interface IStore extends Store {
  __persistor?: any;
}

const middleware = [thunk];
let composeEnhancers;
let enhancer = applyMiddleware(...middleware);

if (process.env.NEXT_PUBLIC_ENV !== 'production') {
  composeEnhancers =
    typeof window === 'object' &&
    (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose)
      ? (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose)
      : compose;
  enhancer = composeEnhancers(applyMiddleware(...middleware));
}

const makeStore = () => createStore(rootReducer, enhancer)

export const wrapper = createWrapper(makeStore)
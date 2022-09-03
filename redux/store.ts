import { createStore, applyMiddleware, compose, Store } from 'redux';

import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import thunk from 'redux-thunk';
import rootReducer from './combineReducer';

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


const makeConfiguredStore = reducer =>
  createStore(reducer, undefined, enhancer);

const makeStore = () => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return makeConfiguredStore(rootReducer);
  }

  // we need it only on client side
  const { persistStore, persistReducer } = require('redux-persist');
  const storage = require('redux-persist/lib/storage').default;

  const persistConfig = {
    key: 'animes_coinable_persist',
    storage,
    stateReconciler: hardSet,
    whitelist: ['animes'], // make sure it does not clash with server keys
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store: IStore = makeConfiguredStore(persistedReducer);
  // eslint-disable-next-line
  store.__persistor = persistStore(store); // Nasty hack

  return store;
};

export default makeStore;

import combineActionsMiddleware from 'redux-combine-actions';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';

import reducers from '../reducers';

const middleware = [];

middleware.push(combineActionsMiddleware);
middleware.push(thunkMiddleware);

// Add Redux state logger.
if (typeof window !== undefined && module.hot) {
  middleware.push(createLogger());
}

export default function configureStore(routerMiddleware, initialState) {
  const store = compose(
    applyMiddleware(
      ...middleware
    ),
    routerMiddleware
  )(createStore)(reducers, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

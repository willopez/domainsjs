import combineActionsMiddleware from 'redux-combine-actions';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';

import reducers from '../reducers';

const middleware = [];

middleware.push(combineActionsMiddleware);
middleware.push(thunkMiddleware);

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

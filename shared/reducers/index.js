import {combineReducers} from 'redux';
import {routerStateReducer as router} from 'redux-router';

import domains from './domains';

const rootReducer = combineReducers({
  domains,
  router
});

export default rootReducer;

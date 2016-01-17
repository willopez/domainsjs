import {combineReducers} from 'redux';
import {routerStateReducer as router} from 'redux-router';

import mainView from './main-view';
import domain from './domain';

const rootReducer = combineReducers({
  mainView,
  domain,
  router
});

export default rootReducer;

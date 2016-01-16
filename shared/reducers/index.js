import {combineReducers} from 'redux';
import {routerStateReducer as router} from 'redux-router';

import mainView from './main-view';
import user from './user';

const rootReducer = combineReducers({
  mainView,
  user,
  router
});

export default rootReducer;

import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import mainView from './main-view';
import domain from './domain';
import domainDetail from './domain-detail';

const rootReducer = combineReducers({
  mainView,
  domain,
  domainDetail,
  router,
});

export default rootReducer;

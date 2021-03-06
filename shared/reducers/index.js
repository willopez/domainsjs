import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import mainView from './main-view';
import domain from './domain';
import domainDetail from './domain-detail';
import domainReport from './domain-report';

const rootReducer = combineReducers({
  mainView,
  domain,
  domainDetail,
  domainReport,
  router,
});

export default rootReducer;

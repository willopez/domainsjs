import React from 'react';
import { Route } from 'react-router';

import MainViewContainer from '../containers/main-view';
import DomainDetailContainer from '../containers/domain-detail';
import ReportsViewContainer from '../containers/reports-view';

export default [
  <Route path="/domain/:id" component={DomainDetailContainer} />,
  <Route path="/reports" component={ReportsViewContainer} />,
  <Route path="/" component={MainViewContainer} />,
];

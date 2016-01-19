import React from 'react';
import { Route } from 'react-router';

import MainViewContainer from '../containers/main-view';
import DomainDetailContainer from '../containers/domain-detail';

export default [
  <Route path="/domain/:id" component={DomainDetailContainer} />,
  <Route path="/" component={MainViewContainer} />,
];

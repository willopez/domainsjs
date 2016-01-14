import React from 'react';
import {Route} from 'react-router';

import MainViewContainer from '../containers/main-view';

export default [
  <Route>
    <Route path='/' component={MainViewContainer} />
  </Route>
];

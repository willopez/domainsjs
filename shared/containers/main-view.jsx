import * as mainViewActions from '../../client/actions/main-view';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import MainView from '../components/main-view';

// Use ES7 decorators to wrap the main view with interactive functionality.
@connect(
  (state) => ({}),
  (dispatch) => bindActionCreators(mainViewActions, dispatch)
)
export default class MainViewContainer extends Component {
  render() {
    return (
      <MainView />
    );
  }
}

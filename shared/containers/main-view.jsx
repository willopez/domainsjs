import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as mainViewActions from '../../client/actions/main-view';
import MainView from '../components/main-view';

// Use ES7 decorators to wrap the main view with interactive functionality.
@connect(
  (state) => ({
    user: state.user
  }),
  (dispatch) => bindActionCreators(mainViewActions, dispatch)
)
export default class MainViewContainer extends Component {

  // Execute an asyncronous action
  async onGetUser(props = this.props) {
    const query = {};
    const vars = {};
    await this.props.getMainView(query, vars);
  }

  render() {
    return (
      <MainView  onGetUser={::this.onGetUser} {...this.props}/>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as mainViewActions from '../../client/actions/main-view';
import MainView from '../components/main-view/main-view';

// Use ES7 decorators to wrap the main view with interactive functionality.
@connect(
  (state) => ({
    domain: state.domain
  }),
  (dispatch) => bindActionCreators(mainViewActions, dispatch)
)
export default class MainViewContainer extends Component {

  // Execute an asyncronous action
  async onUpdateWhoisPrivacy(id, privacy) {
    try {
      await this.props.updateWhoisPrivacy(id, privacy);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <MainView onUpdateWhoisPrivacy={::this.onUpdateWhoisPrivacy} {...this.props}/>
    );
  }
}

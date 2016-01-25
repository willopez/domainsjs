import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ReportsView from '../components/reports-view/reports-view';

@connect(
  (state) => ({
    domainReport: state.domainReport,
  }),
  (dispatch) => bindActionCreators({}, dispatch)
)
export default class ReportsViewContainer extends Component {

  render() {
    return (
      <ReportsView {...this.props} />
    );
  }
}

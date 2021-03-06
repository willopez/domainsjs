import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DomainDetailView from '../components/domain-detail/domain-detail';

@connect(
  (state) => ({
    domainDetail: state.domainDetail.data[0],
  }),
  (dispatch) => bindActionCreators({}, dispatch)
)
export default class DomainDetailContainer extends Component {

  static getQuery() {
    return DomainDetailView.fragments.query;
  }

  render() {
    return (
      <DomainDetailView {...this.props}/>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as domainDetailActions from '../../client/actions/domain-detail';
import DomainDetailView from '../components/domain-detail/domain-detail';

@connect(
  (state) => ({
    domainDetail: state.domainDetail.data[0],
  }),
  (dispatch) => bindActionCreators(domainDetailActions, dispatch)
)
export default class DomainDetailContainer extends Component {

  render() {
    return (
      <DomainDetailView {...this.props}/>
    );
  }
}

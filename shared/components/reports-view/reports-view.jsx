import React, { Component, PropTypes } from 'react';
import ReactHighcharts from 'react-highcharts/bundle/highcharts';

import config from './config';

export default class ReportsView extends Component {
  constructor(props) {
    super(props);
    this.state = { stats: Object.assign({}, config, this.props.domainReport.data) };
  }

  static propTypes = {
  }

  render() {
    return (
      <div className="container">
        <div className="clearfix">
          <h3 className="pull-left">Reports</h3>
        </div>
        <hr className="title-hr" />
        <ReactHighcharts config={this.state.stats}></ReactHighcharts>
      </div>
    );
  }
}

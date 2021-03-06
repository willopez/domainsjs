import React, { Component, PropTypes } from 'react';
import { Cell } from 'fixed-data-table';
import moment from 'moment';

export default class DateCell extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
    field: PropTypes.string.isRequired,
  }

  render() {
    const { rowIndex, field, data, ...props } = this.props;
    const date = data[rowIndex][field];
    return (
      <Cell {...props}>
        {moment(new Date(date)).format('YYYY-MM-DD')}
      </Cell>
    );
  }
}

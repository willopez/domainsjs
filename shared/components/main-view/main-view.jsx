import React, { Component, PropTypes } from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
import LinkCell from '../fixed-data-table/link-cell';
import TextCell from '../fixed-data-table/text-cell';
import BooleanCell from '../fixed-data-table/boolean-cell';

export default class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = { domains: this.props.domain.data };
  }

  render() {
    return (
      <div>
        <div className="cover-heading">
          <h2>Welcome brother!</h2>
        </div>
        <Table
          rowHeight={50}
          headerHeight={50}
          rowsCount={this.state.domains.length}
          width={900}
          height={600}>
          <Column
            header={<Cell>Domain</Cell>}
            cell={
            <LinkCell
            data={this.state.domains}
            field="name"
            />
            }
            width={200}
          />
        <Column
            header={<Cell>WHOIS Privacy</Cell>}
            cell={
            <BooleanCell
            data={this.state.domains}
            field="private_whois"
            />
            }
            width={200}
          />
          </Table>
      </div>
    );
  }
}

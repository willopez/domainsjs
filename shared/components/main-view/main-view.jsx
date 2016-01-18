import React, { Component, PropTypes } from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
import LinkCell from '../fixed-data-table/link-cell';
import TextCell from '../fixed-data-table/text-cell';
import DateCell from '../fixed-data-table/date-cell';
import ToggleCell from '../fixed-data-table/toggle-cell/toggle-cell';

export default class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = { domains: this.props.domain.data };
  }

  render() {
    return (
      <div>
        <div className="cover-heading">
          <h2>Manage</h2>
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
            width={300}
          />
          <Column
            header={<Cell>Expiring</Cell>}
            cell={
            <DateCell
              data={this.state.domains}
              field="expiring_date"
            />
            }
            width={150}
          />
          <Column
            header={<Cell>Registered</Cell>}
            cell={
            <DateCell
              data={this.state.domains}
              field="registered_date"
            />
            }
            width={150}
          />
          <Column
            header={<Cell>Name Server</Cell>}
            cell={
            <TextCell
              data={this.state.domains}
              field="name_server"
            />
            }
            width={150}
          />
          <Column
            header={<Cell>WHOIS Privacy</Cell>}
            cell={
            <ToggleCell
                data={this.state.domains}
                handleChange={this.props.onUpdateWhoisPrivacy}
                field="private_whois"
              />
            }
            width={150}
          />
          </Table>
      </div>
    );
  }
}

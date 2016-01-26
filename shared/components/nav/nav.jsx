import React, { Component, PropTypes } from 'react';

export default class Nav extends Component {

  render() {
    return (
      <div className="masthead clearfix">
        <div className="inner">
          <nav>
            <ul className="nav masthead-nav">
              <li><a href="/">Domains</a></li>
              <li><a href="/reports">Reports</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

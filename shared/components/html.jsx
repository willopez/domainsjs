import React, {Component, PropTypes} from 'react';

export default class Html extends Component {

  static PropTypes = {
    body: PropTypes.any,
    props: PropTypes.any
  }

  render() {
    return (
      <html>
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <title>DomainsJS</title>
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/cover.css" />
          <link rel="stylesheet" href="/css/fixed-data-table.css" />
        </head>
        <body>
          <div className="site-wrapper">
            <div className="site-wrapper-inner">
              <div className="cover-container">
                <div className="inner cover">
                  <div id="root" dangerouslySetInnerHTML={{__html: this.props.body}} />
                </div>
              </div>
            </div>
          </div>
          <script dangerouslySetInnerHTML={{__html: `window.__initialState = ${this.props.props};`}} />
          <script src="/js/bundle.js"></script>
        </body>
      </html>
    );
  }
}

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
          <title>DomainsJS</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{__html: this.props.body}} />
          <script dangerouslySetInnerHTML={{__html: `window.__initialState = ${this.props.props};`}} />
          <script src="/dist/bundle.js"></script>
        </body>
      </html>
    );
  }
}

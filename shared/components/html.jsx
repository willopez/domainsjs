import React, {Component, PropTypes} from 'react';

export default class Html extends Component {
  constructor() {
    super();
  }

  static PropTypes = {
    body: PropTypes.any,
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
          <script src="/dist/bundle.js"></script>
        </body>
      </html>
    );
  }
}

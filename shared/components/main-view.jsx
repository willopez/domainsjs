import React, {Component, PropTypes} from 'react';

export default class MainView extends Component {

  render() {
    return (
      <div>
        <h2>Main View component</h2>
        <button type="button" onClick={this.props.onGetUser} >Click Me!</button>
        {this.props.user.data[0].username}
      </div>
    );
  }
}

import React, {Component, PropTypes} from 'react';

export default class MainView extends Component {

  render() {
    return (
      <div className="cover-heading">
        <h2>Welcome brother!</h2>
        <button type="button" className="btn btn-primary btn-sm" onClick={this.props.onGetUser} >Click Me!</button>
        {this.props.user.data[0].username}
      </div>
    );
  }
}

import React, { Component } from "react";

export default class DisplayCount extends Component {
  static defaultProps = {
    message: "Click on button",
  };

  render() {
    return (
      <div>
        {!this.props.number ? (
          <p>{this.props.message}</p>
        ) : (
          <p>{this.props.number}</p>
        )}

        {/* <p>{this.props.number}</p> */}
      </div>
    );
  }
}

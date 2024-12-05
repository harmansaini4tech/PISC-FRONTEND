import React, { Component } from "react";
import DisplayCount from "./DisplayCount";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="m-5">
        <DisplayCount number={this.state.count}></DisplayCount>
        
        <button
          className="bg-green-300 rounded p-2"
          onClick={() => this.increment(this)}
        >
          Increase count
        </button>
      </div>
    );
  }
}

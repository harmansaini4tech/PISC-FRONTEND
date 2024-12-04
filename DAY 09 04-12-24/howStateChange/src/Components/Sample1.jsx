import React, { Component } from "react";
import Sample2 from "./Sample2"
export default class Sample1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      data: <p>My name is harman</p>,
    };
  }

  componentDidMount(){
    console.log("mounted")
  }

  componentDidUpdate(){
    console.log("updated")
  }

  componentWillUnmount(){
    console.log("unmounted")
  }

  changeMyName = () => {
    this.setState({ name: this.state.data });
  };


  render() {
    return (
      <>
        <span> {this.state.name}</span>
        <button onClick={() => this.changeMyName()} className="bg-blue-400 rounded mt-4 ml-3">Get my name </button>
        <Sample2 ></Sample2>
      </>
    );
  }
}

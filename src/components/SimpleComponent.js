// Code SimpleComponent Here
import React, { Component } from "react";

class SimpleComponent extends Component {
  constructor() {
    super();
    this.state = {
      mood: "happy"
    };
  }

  handleClick = e => {
    this.state.mood === "happy"
      ? this.setState({ mood: "sad" })
      : this.setState({ mood: "happy" });
  };
  render() {
    return (
      <div className="simpleComponent" onClick={this.handleClick}>
        {this.state.mood}
      </div>
    );
  }
}
export default SimpleComponent;

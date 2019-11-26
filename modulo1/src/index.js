import React, { Component } from "react";
import { render } from "react-dom";

import Button from "./Button";

import "./style.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <>
        <h1 className="title">Hello Rocketseat</h1>
        <h2 style={{ color: "#f00" }}>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </>
    );
  }
}

render(<App />, document.getElementById("app"));

import React, { Component } from "react";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1> welcome! </h1>
        <button onClick={() => this.props.history.push("/main")}> to the events </button>
      </div>
    );
  }
}

export default LandingPage;

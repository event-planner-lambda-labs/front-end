import React, { Component } from "react";
import { Button } from "@material-ui/core";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1> welcome to Go Have Fun! </h1>
        <Button onClick={() => this.props.history.push("/main")}> to the events </Button>
      </div>
    );
  }
}

export default LandingPage;

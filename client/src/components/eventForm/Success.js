import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

export class Success extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/main");
    }, 1250);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="createEventForm">
          <AppBar title="Success" />
          <h1>Thank You For Submitting Your Event</h1>
          <p>Now Go Have Fun!</p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Success;

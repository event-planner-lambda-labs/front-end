import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";


export class Success extends Component {
  continue = e => {
    e.preventDefault();
    //Send to backend 
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
       <h1>Thank You For Submitting Your Event</h1>
       <p>Now Go Have Fun!</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}



export default Success;

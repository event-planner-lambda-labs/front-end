import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Success extends Component {
  
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/main");
    }, 2250);
  }

  render() {
    return (
      <div className="eventFormSuccess">
        <h1>Success</h1>
        <h2>Thank You For Submitting Your Event</h2>
        <p>Now Go Have Fun!</p>
      </div>
    );
  }
}

export default withRouter(Success);
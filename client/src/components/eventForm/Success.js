import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { getEvents } from '../../store/index';

class Success extends Component {
  
  componentDidMount() {
    this.props.getEvents();
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

const mapStateToProps = ({ events }) => ({
  events
})

export default connect(mapStateToProps, { getEvents })(withRouter(Success));
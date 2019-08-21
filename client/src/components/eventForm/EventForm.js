import React, { Component } from "react";
import Navigation from "../Navigation";

import EventDetails from "./EventDetails";
import MoreDetails from "./MoreDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import Footer from "../Footer";

class EventForm extends Component {
  state = {
    step: 1,
    newEvent: {
      title: "",
      location: "",
      event_time: "",
      event_date: "",
      short_details: "",
      long_details: "",
      public_status: true,
      host_id: JSON.parse(localStorage.user).id
    }
  };

  //Proceed to next step

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  //Go Back

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  setLocation = location => {
    this.setState({
      newEvent: {
        ...this.state.newEvent,
        location: location
      }
    });
  };

  //Handle Change
  handleChange = input => e => {
    this.setState({ newEvent: { ...this.state.newEvent, [input]: e.target.value } });
  };

  //Checkbox
  togglePublicStatus = () => {
    this.setState({
      newEvent: {
        ...this.state.newEvent,
        public_status: !this.state.newEvent.public_status
      }
    });
  };

  render() {
    const { step } = this.state;
    const {
      title,
      location,
      event_time,
      event_date,
      short_details,
      long_details,
      public_status,
      host_id
    } = this.state.newEvent;

    const values = {
      title,
      location,
      event_time,
      event_date,
      short_details,
      long_details,
      public_status,
      host_id
    };

    switch (step) {
      case 1:
        return (
          <>
            <Navigation />
            <div className="eventForm">
              <EventDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                setLocation={this.setLocation}
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <Navigation />
            <div className="eventForm">
              <MoreDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                togglePublicStatus={this.togglePublicStatus}
                values={values}
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <Navigation />
            <div className="eventForm">
              <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                newEvent={this.state.newEvent}
              />
            </div>
          </>
        );
      case 4:
        return <Success />;
      default:
        return null;
    }
  }
}

export default EventForm;

import React, { Component } from "react";
import EventDetails from "./EventDetails";
import MoreDetails from "./MoreDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class EventForm extends Component {
  state = {
    step: 1,
    newEvent: {
      title: "",
      location: "",
      event_time: "",
      event_date: "",
      short_details: "",
      long_details: "",
      public: true,
      host_id: 1 // test, need to pass in host_id
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

  //Handle Change
  handleChange = input => e => {
    this.setState({ newEvent: { ...this.state.newEvent, [input]: e.target.value } });
  };

  //Checkbox
  togglePublicStatus = () => {
    this.setState({ publicStatus: !this.state.newEvent.publicStatus });
  };

  render() {
    console.log(this.state.newEvent);
    const { step } = this.state;
    const {
      title,
      location,
      eventTime,
      eventDate,
      shortDetails,
      longDetails,
      publicStatus
    } = this.state.newEvent;

    const values = {
      title,
      location,
      eventTime,
      eventDate,
      shortDetails,
      longDetails,
      publicStatus
    };

    switch (step) {
      case 1:
        return (
          <EventDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
        );
      case 2:
        return (
          <MoreDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            togglePublicStatus={this.togglePublicStatus}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            newEvent={this.state.newEvent}
          />
        );
      case 4:
        return <Success />;
      default:
        return null;
    }
  }
}

export default EventForm;

import React, { Component } from "react";
import EventDetails from "./EventDetails";
import MoreDetails from "./MoreDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class EventForm extends Component {
  state = {
    step: 1,
    title: "",
    location: "",
    eventTime: "",
    eventDate: "",
    shortDetails: "",
    longDetails: "",
    publicStatus: true
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
    this.setState({ [input]: e.target.value });
  };

  //Checkbox
   handleChange = publicStatus => event => {
    this.setState({ [publicStatus]: event.target.checked });
  };

  render() {
    const { step } = this.state;
    const {
      title,
      location,
      eventTime,
      eventDate,
      shortDetails,
      longDetails,
      publicStatus
    } = this.state;

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
            <EventDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
        );
      case 2:
          return (
            <MoreDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
        );
      case 3:
          return (
            <Confirm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
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

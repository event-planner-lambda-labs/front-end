import React, { Component } from "react";
import {TextField, Button} from "@material-ui/core";
import LocationSearchInput from "./EventLocationComponent";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

export default class EventDetails extends Component {

  state = {
    able: true
  }

  continue = async e => {
    e.preventDefault();
    const location = {};
    const inputValue = document.querySelector(".event-location input").value;
    location.address = inputValue;
    await geocodeByAddress(inputValue)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        location.lat = latLng.lat;
        location.lng = latLng.lng;
      })
      .catch(error => console.error("Error", error));
    this.props.setLocation(JSON.stringify(location));
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <form className="createEventForm">
        <h1>Enter Event Details</h1>
        <TextField
          hint="Enter Your Event Title"
          label="Event Title"
          onChange={handleChange("title")}
          value={values.title}
          required
        />
        <LocationSearchInput
          label="Event Location"
          onChange={handleChange("location")}
          value={values.location}
          required
        />
        <TextField
          label="Event Time"
          type="time"
          onChange={handleChange("event_time")}
          value={values.event_time}
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        <TextField
          label="Event Date"
          type="date"
          onChange={handleChange("event_date")}
          value={values.event_date}
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
        {this.props.buttons(this.continue)}
      </form>
    );
  };
};
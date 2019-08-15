import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LocationSearchInput from "../map/LocationSearchComponent";

export class EventDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <form className="createEventForm">
          <AppBar title="Enter Event Details" />
          <TextField
            hint="Enter Your Event Title"
            label="Event Title"
            onChange={handleChange("title")}
            value={values.title}
            required
          />
          <br />
          <TextField
            label="Event Location"
            onChange={handleChange("location")}
            value={values.location}
            required
          />
          <LocationSearchInput onChange={handleChange("location")} value={values.location} />
          <br />
          <TextField
            // label="Event Time"
            type="time"
            onChange={handleChange("event_time")}
            value={values.event_time}
            required
          />
          <br />
          <TextField
            //label="Event Date"
            type="date"
            onChange={handleChange("event_date")}
            value={values.event_date}
            required
          />
          <br />
          <Button
            label="Continue"
            variant="contained"
            primary={true}
            styles={styles.button}
            onClick={this.continue}
          >
            Continue
          </Button>
        </form>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default EventDetails;

import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class EventDetails extends Component {
  contine = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Event Details" />
          <TextField
            hintText="Enter Your Event Title"
            floatingLabelText="Event Title"
            onChange={handleChange("title")}
            defaultValue={values.title}
          />
          <br />
          <TextField
            hintText="Enter Your Event Location"
            floatingLabelText="Event Location"
            onChange={handleChange("title")}
            defaultValue={values.title}
          />
          <br />
          <TextField
            hintText="Enter Your Event Time"
            floatingLabelText="Event Time"
            onChange={handleChange("eventTime")}
            defaultValue={values.title}
          />
          <br />
          <TextField
            hintText="Enter Your Event Date"
            floatingLabelText="Event Date"
            onChange={handleChange("eventdate")}
            defaultValue={values.title}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            styles={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
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

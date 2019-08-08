import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { List, ListItemText } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export class Confirm extends Component {
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
    const {
      values: { title, location, eventTime, eventDate, shortDetails, longDetails }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm Event Details" />
          <List>
            <ListItemText primary="Title" secondary={title} />
            <ListItemText primary="Location" secondary={location} />
            <ListItemText primary="Event Time" secondary={eventTime} />
            <ListItemText primary="Event Date" secondary={eventDate} />
            <ListItemText primary="Short Details" secondary={shortDetails} />
            <ListItemText primary="Long Details" secondary={longDetails} />
          </List>

          <Button
            label="Confirm and Continue"
            variant="contained"
            primary={true}
            styles={styles.button}
            onClick={this.continue}
          >
            Continue
          </Button>
          <Button
            label="Back"
            variant="contained"
            primary={false}
            styles={styles.button}
            onClick={this.back}
          >
            Back
          </Button>
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

export default Confirm;

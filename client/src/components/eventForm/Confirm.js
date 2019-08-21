import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { List, ListItemText } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { postEvent } from "../../store/index";

export class Confirm extends Component {
  continue = async e => {
    e.preventDefault();
    console.log(this.props.newEvent);
    await this.props.postEvent(this.props.newEvent);
    //Send to backend
    setTimeout(() => {
      if (this.props.postedEvent) {
        this.props.nextStep();
      } else {
        alert("Event was not posted :( Try again?");
      }
    }, 2000);
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { title, location, event_time, event_date, short_details, long_details }
    } = this.props;
    return (
      <MuiThemeProvider>
        <div className="createEventForm">
          <AppBar title="Confirm Event Details" />
          <List>
            <ListItemText primary="Title" secondary={title} />
            <ListItemText primary="Location" secondary={JSON.parse(location).address} />
            <ListItemText primary="Event Time" secondary={event_time} />
            <ListItemText primary="Event Date" secondary={event_date} />
            <ListItemText primary="Short Details" secondary={short_details} />
            <ListItemText primary="Long Details" secondary={long_details} />
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
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

const mapStateToProps = ({ postingEvent, postedEvent }) => ({ postingEvent, postedEvent });

export default connect(
  mapStateToProps,
  { postEvent }
)(Confirm);

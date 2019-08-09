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
    if (this.props.postedEvent) {
      this.props.nextStep();
    } else {
      alert("Event was not posted :( Try again?");
    }
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
        <div className="createEventForm">
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

import React, { Component } from "react";
import { List, ListItemText, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { postEvent } from "../../store/index";

class Confirm extends Component {
  continue = async e => {
    e.preventDefault();
    console.log(this.props.newEvent);
    await this.props.postEvent(this.props.newEvent);
    //Send to backend
    setTimeout(() => {
      if (this.props.postedEvent) {
        this.props.nextStep();
      } else {
        alert("Event was not posted, check required fields and try again?");
      }
    }, 2000);
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        title,
        location,
        event_time,
        event_date,
        short_details,
        long_details,
        public_status
      }
    } = this.props;
    return (
      <form className="createEventForm">
        <h1>Confirm Event Details</h1>
        <List>
          <ListItemText primary="Title" secondary={title} />
          <ListItemText primary="Location" secondary={JSON.parse(location).address} />
          <ListItemText primary="Event Time" secondary={event_time} />
          <ListItemText primary="Event Date" secondary={event_date} />
          <ListItemText primary="Short Details" secondary={short_details} />
          <ListItemText primary="Long Details" secondary={long_details} />
          <ListItemText primary="Private Event" secondary={public_status ? "No" : "Yes"} />
        </List>
        <div className="btnGroup">
          <Button label="Back" variant="contained" primary={false} onClick={this.back}>
            Back
          </Button>
          <Button
            label="Confirm and Continue"
            variant="contained"
            primary={true}
            onClick={this.continue}
          >
            Create Event
          </Button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ postingEvent, postedEvent }) => ({ postingEvent, postedEvent });

export default connect(
  mapStateToProps,
  { postEvent }
)(Confirm);

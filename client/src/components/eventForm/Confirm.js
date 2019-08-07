import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class Confirm extends Component {
  contine = e => {
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
            <ListItem primaryText="Title" secondaryText={title} />
            <ListItem primaryText="Location" secondaryText={location} />
            <ListItem primaryText="Event Time" secondaryText={eventTime} />
            <ListItem primaryText="Event Date" secondaryText={eventDate} />
            <ListItem primaryText="Short Details" secondaryText={shortDetails} />
            <ListItem primaryText="Long Details" secondaryText={longDetails} />
          </List>

          <RaisedButton
            label="Confirm and Continue"
            primary={true}
            styles={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Continue"
            primary={false}
            styles={styles.button}
            onClick={this.back}
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

export default Confirm;

import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem} from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

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
    const { values: { title, location, eventTime, eventDate, shortDetails, longDetails } } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm Event Details" />
          <List>
              <ListItem
                primaryText="Title"
                seondaryText={ title }
              />
              <ListItem
                primaryText="Location"
                seondaryText={ location }
              />
              <ListItem
                primaryText="Event Time"
                seondaryText={ eventTime }
              />
              <ListItem
                primaryText="Event Date"
                seondaryText={ eventDate }
              />
              <ListItem
                primaryText="Short Details"
                seondaryText={ shortDetails }
              />
              <ListItem
                primaryText="Long Details"
                seondaryText={ longDetails }
              />
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

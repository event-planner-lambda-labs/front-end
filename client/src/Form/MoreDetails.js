import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Checkbox from '@material-ui/core/Checkbox';

export class MoreDetails extends Component {
  state = {
    publicStatus:true 
  };

  contine = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter More Details" />
          <TextField
            hintText="Enter Short Details"
            floatingLabelText="Short Details"
            onChange={handleChange("shortDetails")}
            defaultValue={values.shortDetails}
          />
          <br />
          <TextField
            hintText="Enter Long Details"
            floatingLabelText="Long Details"
            multiline="true"
            onChange={handleChange("longDetails")}
            defaultValue={values.longDetails}
          />
          <br />
           <Checkbox
        checked={this.state.publicStatus}
        onChange={handleChange('publicStatus')}
        value="publicStatus"
        inputProps={{
          'aria-label': 'primary checkbox',
        }}
      />

          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            styles={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
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

export default MoreDetails;

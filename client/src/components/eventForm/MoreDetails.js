import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export class MoreDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange, togglePublicStatus } = this.props;
    return (
      <MuiThemeProvider>
        <div className="createEventForm">
          <AppBar title="Enter More Details" />
          <TextField
            label="Short Details"
            onChange={handleChange("short_details")}
            value={values.short_details}
          />
          <br />
          <TextField
            label="Long Details"
            multiline
            rowsMax="7"
            onChange={handleChange("long_details")}
            defaultValue={values.long_details}
          />
          <br />
          <FormControlLabel
            control={
              <Checkbox
                checked={values.public_status}
                onChange={togglePublicStatus}
                value="public_status"
                inputProps={{
                  "aria-label": "primary checkbox"
                }}
              />
            }
            label="Private Event"
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

export default MoreDetails;

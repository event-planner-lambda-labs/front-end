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
        <React.Fragment>
          <AppBar title="Enter More Details" />
          <TextField
            label="Short Details"
            onChange={handleChange("shortDetails")}
            value={values.shortDetails}
          />
          <br />
          <TextField
            label="Long Details"
            multiline
            rowsMax="7"
            onChange={handleChange("longDetails")}
            defaultValue={values.longDetails}
          />
          <br />
          <FormControlLabel
            control={
              <Checkbox
                checked={values.publicStatus}
                onChange={togglePublicStatus}
                value="publicStatus"
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

import React, { Component } from "react";
import { TextField, Button, FormControlLabel, Checkbox } from "@material-ui/core";

export default class MoreDetails extends Component {
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
      <form className="createEventForm" onSubmit={this.continue}>
        <h1>Enter More Details</h1>
        <TextField
          label="Short Details"
          onChange={handleChange("short_details")}
          value={values.short_details}
        />
        <TextField
          label="Long Details"
          multiline
          rowsMax="7"
          onChange={handleChange("long_details")}
          defaultValue={values.long_details}
        />
        <FormControlLabel
          control={
            <Checkbox
              className='checkbox'
              checked={!values.public_status}
              onChange={togglePublicStatus}
              value="public_status"
              inputProps={{
                "aria-label": "primary checkbox"
              }}
            />
          }
          label="Private Event"
        />
        <div className='btnGroup'>
          <Button
            label="Back"
            variant="contained"
            primary={false}
            onClick={this.back}
          >
            Back
          </Button>
          <Button
            className='detailsBtn'
            variant="contained"
            primary={true}
            onClick={this.continue}
          >
            Continue
        </Button>
        </div>
      </form>
    );
  }
}
import React, { Component } from " react";
import EventDetails from './EventDetails';

export class EventForm extends Component {
  state = {
    step: 1,
    title: "",
    location: "",
    eventTime: "",
    eventDate: "",
    shortDetails: "",
    longDetails: "",
    public: true
  };

  //Proceed to next step

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  //Go Back

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //Handle Change 

  handelChange = input => e => {
      this.setState({[input]: e.target.value});
  }

  render() {
      const { step } = this.state;
      const { title, location, eventTime, eventDate, shortDetails, longDetails, public  } = this.state 
      const values = { title, location, eventTime, eventDate, shortDetails, longDetails, public  }

      switch(step) {
          case 1:
      
    return (
        <EventDetails 
        nextStep={this.nextStep}
        handelChange={this.handelChange}
        values={values}
        />
    )
    case 2: 
        return <h1>PersonalDetails</h1>
    case 3:
        return <h1>Confirm</h1>
    case 4:
        return <h1>Success</h1>
    
    }
  }   
}

export default EventForm;  

import React from "react";
import MapComponent from "./map/MapComponent";
import SimpleModal from "./eventForm/EventModal";
import EventForm from "./eventForm/EventForm";

class Main extends React.Component {
  // component did mount - get events

  render() {
    return (
      <div>
        <button onClick={() => this.props.history.push("/createEvent")}> Create an event </button>
        <MapComponent />
      </div>
    );
  }
}

export default Main;

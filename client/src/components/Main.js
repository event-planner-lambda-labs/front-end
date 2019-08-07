import React from "react";
import MapComponent from "./map/MapComponent";
import SimpleModal from "./eventForm/EventModal";

class Main extends React.Component {
  // component did mount - get events

  render() {
    return (
      <div>
        <SimpleModal />
        <MapComponent />
      </div>
    );
  }
}

export default Main;

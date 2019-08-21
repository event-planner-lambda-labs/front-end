import React from "react";
import MapComponent from "./map/MapComponent";
import Navigation from "./Navigation";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <MapComponent props={this.props} />
      </div>
    );
  }
}

export default Main;

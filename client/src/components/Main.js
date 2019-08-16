import React from "react";
import MapComponent from "./map/MapComponent";

class Main extends React.Component {
  render() {
    return (
      <div>
        <MapComponent props={this.props} />
      </div>
    );
  }
}

export default Main;

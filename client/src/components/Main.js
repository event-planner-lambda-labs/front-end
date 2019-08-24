import React from "react";
import MapComponent from "./map/MapComponent";
import Navigation from "./Navigation";

export default function Main(props) {
  return (
    <div className="MapPage">
      <div>
        <Navigation lock={props.lock} />
      </div>
      <MapComponent props={props} />
    </div>
  );
}

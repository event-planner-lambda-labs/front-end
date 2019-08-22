import React from "react";
import MapComponent from "./map/MapComponent";
import Navigation from "./Navigation";

export default function Main(props) {
  return (
    <div>
      <Navigation lock={props.lock} />
      <MapComponent props={props} />
    </div>
  );
};
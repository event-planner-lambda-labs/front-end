import React from "react";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import Map from "./Map";

import LocationSearchInput from "./LocationSearchComponent";

const WrappedMap = withGoogleMap(Map);

export default function eventMap() {
  return (
    <div style={{ width: "100vw", height: "70vh" }}>
      <LocationSearchInput />
      <WrappedMap
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCtTDf-cRIv4LFjrPKPUttpcLXb45tHhRw 	"
        }
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}

import React, { useState, Component } from "react";
//import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
//import * as eventsData from "data file for event details";
import mapStyles from "../../styles/MapStyles";
//import Geo from "./GeoComponent";

import LocationSearchInput from "./LocationSearchComponent";

const dummyData = [
  {
    lat: 39.063555,
    lng: -94.583268
  }
];

function Map() {
  //setting up to display event detail boxes when clicking markers
  const [selectedEvent, setSelectedEvent] = useState(null);

  //function for geolocation unsure if correct in usage here, may be able to implement without making it a function?

  //default map renders to ground 0, eventsData and id can be confirmed/updated once event dataset array is built out

  return (
    <body className="google-map">
      <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: 39.063555, lng: -94.583268 }}
        defaultOptions={{ styles: mapStyles }}
      >
        {dummyData.map(events => (
          <Marker
            key={events.length}
            position={{
              lat: events.lat, // must be an integer, not a string
              lng: events.lng
            }}
            //onclick event to show event details when clicking marker
            onClick={() => {
              setSelectedEvent(events);
            }}
            //displays icon for event, using default icon for now until category icons are integrated
            icon={{
              url: "http://prankster101.com/newsite/wp-content/uploads/event-icon.png",
              scaledSize: new window.google.maps.Size(25, 25)
            }}
          />
        ))}

        {selectedEvent && (
          //displays data from database based on selected park
          <InfoWindow
            position={{
              lat: selectedEvent.event.location[1],
              lng: selectedEvent.event.location[0]
            }}
            //sets default state back to null when closing event details
            onCloseClick={() => {
              setSelectedEvent(null);
            }}
          >
            <div>
              <h3>{selectedEvent.properties.title}</h3>
              <p>{selectedEvent.properties.shortDetails}</p>
              <p>{selectedEvent.properties.eventDate}</p>
              <p>{selectedEvent.properties.eventTime}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </body>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function eventMap() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
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

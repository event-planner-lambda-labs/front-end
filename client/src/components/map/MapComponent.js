import React, { useState, Component } from "react";
//import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
//import * as eventsData from "data file for event details";
import mapStyles from "../../styles/MapStyles";
import Geo from "./GeoComponent";
import LocationSearchComponent from "./LocationSearchComponent";

function Map() {
  //setting up to display event detail boxes when clicking markers
  const [selectedEvent, setSelectedEvent] = useState(null);

  //function for geolocation unsure if correct in usage here, may be able to implement without making it a function?

  //default map renders to ground 0, eventsData and id can be confirmed/updated once event dataset array is built out
  const dummyData = [
    {
      lat: 39.063555,
      lng: -94.583268
    },
    {
      lat: 39.95233,
      lng: -75.16379
    },
    {
      lat: 39.045,
      lng: -94.586
    },
    {
      lat: 39.0073,
      lng: -94.5295
    },
    {
      lat: 39.463598,
      lng: -94.583232
    },
    {
      lat: 39.263559,
      lng: -94.583252
    }
  ];

  return (
    <body className="google-map">
      <Geo />
      <LocationSearchComponent />
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
              lat: selectedEvent.geometry.coordinates[1],
              lng: selectedEvent.geometry.coordinates[0]
            }}
            //sets default state back to null when closing event details
            onCloseClick={() => {
              setSelectedEvent(null);
            }}
          >
            <div>
              <h3>{selectedEvent.properties.TITLE}</h3>
              <p>{selectedEvent.properties.SHORT_DETAILS}</p>
              <p>{selectedEvent.properties.EVENT_DATE}</p>
              <p>{selectedEvent.properties.EVENT_TIME}</p>
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
    <div style={{ width: "100vw", height: "90vh" }}>
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

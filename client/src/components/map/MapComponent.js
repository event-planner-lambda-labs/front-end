import React, { useState, Component } from 'react';
//import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
//import * as eventsData from "data file for event details";
import mapStyles from "../MapStyles";
import geoLocated from "../components/GeoComponent";
import 

function Map() {
  //setting up to display event detail boxes when clicking markers
  const [selectedEvent, setSelectedEvent] = useState(null);

  //function for geolocation unsure if correct in usage here, may be able to implement without making it a function?


//default map renders to ground 0, eventsData and id can be confirmed/updated once event dataset array is built out
  return (
    <body className = "google-map">
    
    <geoLocated />

    <GoogleMap 
      defaultZoom={10}
      defaultCenter={{lat: this.position.coords.latitude , lng: this.position.coords.longitude}} 
      defaultOptions={{styles: mapStyles}}
      >
        {eventsData.features.map(events=> ( 
          <Marker key={events.properties.EVENT_ID} 
          position={{
            lat: events.geometry.coordinates [1],
            lng: events.geometry.coordinates [0],
          }}
          //onclick event to show event details when clicking marker
          onClick={() =>{
            setSelectedEvent(events);

          }}
          //displays icon for event, using default icon for now until category icons are integrated
          icon={{
            url: '/event-icon.png',
            scaledSize: new window.google.maps.Size(25, 25),
          }}
          />
        ))}

      
      {selectedEvent && (
        //displays data from database based on selected park
        <InfoWindow
        position={{
          lat: selectedEvent.geometry.coordinates [1],
          lng: selectedEvent.geometry.coordinates [0],
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
  return <div style ={{width: '50vw', height: '50vh'}}>
      <WrappedMap 
        googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCtTDf-cRIv4LFjrPKPUttpcLXb45tHhRw 	'} 
        loadingElement={<div style={{height: "100%"}} />}
        containerElement={<div style={{height: "100%"}} />}
        mapElement={<div style={{height: "100%"}} />}
    />
  </div>;
}
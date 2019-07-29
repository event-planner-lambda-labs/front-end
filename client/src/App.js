import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { get } from "./reducers/index";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class App extends React.Component {
  componentDidMount() {
    console.log("cmd happened");

    this.props.get();
  }

  render() {
    console.log(this.props.message);
    return (
      <div className="App">
        <p>{this.props.message.message}</p>
        <Map
          google={this.props.google}
          zoom={12}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
          >
          <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
      </div>
    );
  }
}

const mapStateToProps = ({ message }) => ({
  message
});

const mapStyles = {
  width: '50%',
  height: '50%',
};

export default connect(
  mapStateToProps,
  { get }
)(App);
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCtTDf-cRIv4LFjrPKPUttpcLXb45tHhRw'
})(MapContainer);

import React from "react";
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import Search from "./LocationSearchComponent";
import { connect } from "react-redux";
import mapStyles from "../../styles/MapStyles";
import { EventIcon, CurrentLocation } from "../../pictures";

class Map extends React.Component {
  state = {
    selectedEvent: {},
    selected: false,
    open: false,
    lat: undefined,
    lng: undefined,
    zoom: 14
  };

  componentDidMount() {
    this.getPosition()
      .then(position => {
        this.setState({ lat: position.coords.latitude, lng: position.coords.longitude });
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  searchLocation = (lat, lng) => {
    this.setState({
      ...this.state,
      selected: true,
      lat: lat,
      lng: lng,
      zoom: 18
    })
  }

  getPosition = () => {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  render() {
    return (
      <div className="google-map">
        <Search className="searchBar" location={this.searchLocation} />
        <GoogleMap
          zoom={this.state.zoom}
          center={{ lat: this.state.lat, lng: this.state.lng }}
          defaultOptions={{ styles: mapStyles }}
          onZoomChanged={() => {
            this.setState({
              ...this.state,
              zoom: 14
            })
          }}
        >
          {this.props.events.map(event => {
            return (
              <Marker
                key={event.id}
                position={{
                  lat: parseFloat(JSON.parse(event.location).lat), // must be an integer, not a string
                  lng: parseFloat(JSON.parse(event.location).lng)
                }}
                //onclick event to show event details when clicking marker
                onClick={() => {
                  this.setState({ 
                    selectedEvent: event, 
                    open: true,
                    lat: parseFloat(JSON.parse(event.location).lat),
                    lng: parseFloat(JSON.parse(event.location).lng),
                    zoom: 18
                  });
                }}
                //displays icon for event, using default icon for now until category icons are integrated
                icon={{
                  url: EventIcon,
                  scaledSize: new window.google.maps.Size(30, 30)
                }}
              />
            );
          })}
          {this.state.selected &&
            <Marker 
              position={{
                lat: parseFloat(this.state.lat), // must be an integer, not a string
                lng: parseFloat(this.state.lng)
              }}
              icon={{
                url: CurrentLocation,
                scaledSize: new window.google.maps.Size(30, 30)
              }}
            />
          }
          {this.state.open && 
            //displays data from database based on selected park
            <InfoWindow
              position={{
                lat: parseFloat(JSON.parse(this.state.selectedEvent.location).lat),
                lng: parseFloat(JSON.parse(this.state.selectedEvent.location).lng)
              }}
              //sets default state back to null when closing event details
              onCloseClick={() => {
                this.setState({
                  selectedEvent: {}, 
                  open: false,
                  lat: undefined,
                  lng: undefined,
                  zoom: 14
                });
              }}
            >
              <div>
                <h3>{this.state.selectedEvent.title}</h3>
                <p>{JSON.parse(this.state.selectedEvent.location).address}</p>
                <p>{this.state.selectedEvent.short_details}</p>
                <p>{this.state.selectedEvent.event_date}</p>
                <p>{this.state.selectedEvent.event_time}</p>
              </div>
            </InfoWindow>
          }
        </GoogleMap>
      </div>
    );
  }
}

const mapStateToProps = ({ events }) => ({ events });

export default connect(
  mapStateToProps,
  {}
)(Map);
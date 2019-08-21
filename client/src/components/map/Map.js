import React from "react";
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import Search from "./LocationSearchComponent";
import { connect } from "react-redux";
import mapStyles from "../../styles/MapStyles";

class Map extends React.Component {
  state = {
    selectedEvent: {},
    open: false,
    lat: undefined,
    lng: undefined,
    bounds: null
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

  getPosition = () => {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  render() {
    return (
      <div className="google-map">
        <Search className="searchBar" />
        <GoogleMap
          defaultZoom={14}
          center={{ lat: this.state.lat, lng: this.state.lng }}
          defaultOptions={{ styles: mapStyles }}
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
                  this.setState({ selectedEvent: event, open: true });
                }}
                //displays icon for event, using default icon for now until category icons are integrated
                icon={{
                  url: "http://prankster101.com/newsite/wp-content/uploads/event-icon.png",
                  scaledSize: new window.google.maps.Size(25, 25)
                }}
              />
            );
          })}

          {this.state.open && 
            //displays data from database based on selected park
            <InfoWindow
              position={{
                lat: parseFloat(JSON.parse(this.state.selectedEvent.location).lat),
                lng: parseFloat(JSON.parse(this.state.selectedEvent.location).lng)
              }}
              //sets default state back to null when closing event details
              onCloseClick={() => {
                this.setState({ open: false });
              }}
            >
              <div>
                <h3>{this.state.selectedEvent.title}</h3>
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

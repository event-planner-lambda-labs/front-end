import React from "react";
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import Search from "./LocationSearchComponent";
import { connect } from "react-redux";
import mapStyles from "../../styles/MapStyles";
import Calendar from "../../pictures/event-icon.png";
import moment from "moment";

class Map extends React.Component {
  state = {
    selectedEvent: {},
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
      lat: lat,
      lng: lng,
      zoom: 18
    });
  };

  getPosition = () => {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  convertTime = time => {
    if (parseInt(time) > 12) {
      const hour = parseInt(time) - 12;
      const minutes = time.slice(2, 5);
      return <p>{hour + minutes + " PM"}</p>;
    } else {
      const newTime = time.slice(0, 5);
      return <p>{newTime + " AM"}</p>;
    }
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
            });
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
                  url: Calendar,
                  scaledSize: new window.google.maps.Size(30, 30)
                }}
              />
            );
          })}

          {this.state.open && (
            //displays data from database based on selected park
            <InfoWindow
              position={{
                lat: parseFloat(JSON.parse(this.state.selectedEvent.location).lat + 0.0001),
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
              <div className="windowInfo">
                {/* {console.log(this.state.selectedEvent)} */}
                <h3 className="infoTitle">{this.state.selectedEvent.title}</h3>
                <p className="infoAddress">
                  {JSON.parse(this.state.selectedEvent.location).address}
                </p>
                <p className="infoDetails">{this.state.selectedEvent.short_details}</p>
                <p className="infoTime">{this.convertTime(this.state.selectedEvent.event_time)}</p>
                <p className="infoDate">
                  {" "}
                  {moment(this.state.selectedEvent.event_date).format("MMM Do YYYY")}
                </p>
              </div>
            </InfoWindow>
          )}
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

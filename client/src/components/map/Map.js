import React from "react";
import { GoogleMap, Marker, InfoWindow, Geocoder } from "react-google-maps";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { connect } from "react-redux";
import mapStyles from "../../styles/MapStyles";

const dummyData = [
  {
    id: 1,
    title: "Test Event NEW",
    location: "8679 Overlook Street, Libertyville, IL 60048",
    event_time: "16:30:20",
    event_date: "2019-10-15T00:00:00.000Z",
    short_details: "test test test",
    long_details: "a lot of details in long text form. I dont know what the limit actually is",
    public_status: true,
    host_id: 1,
    created_at: "2019-08-12T22:07:58.322Z",
    updated_at: "2019-08-12T22:07:58.322Z"
  },
  {
    id: 34,
    title: "Test Event NEW",
    location: "61 Buttonwood Road, Latrobe, PA 15650",
    event_time: "16:30:20",
    event_date: "2019-10-15T00:00:00.000Z",
    short_details: "test test test",
    long_details: "a lot of details in long text form. I dont know what the limit actually is",
    public_status: true,
    host_id: 1,
    created_at: "2019-08-13T15:17:19.979Z",
    updated_at: "2019-08-13T15:17:19.979Z"
  },
  {
    id: 35,
    title: "Test Event NEW",
    location: "42 Grove Court, Watertown, MA 02472",
    event_time: "16:30:20",
    event_date: "2019-10-15T00:00:00.000Z",
    short_details: "test test test",
    long_details: "a lot of details in long text form. I dont know what the limit actually is",
    public_status: true,
    host_id: 1,
    created_at: "2019-08-14T01:16:27.068Z",
    updated_at: "2019-08-14T01:16:27.068Z"
  },
  {
    id: 36,
    title: "test title",
    location: "8060 Catherine Rd, Wadsworth, OH 44281",
    event_time: "11:30:00",
    event_date: "2019-08-15T00:00:00.000Z",
    short_details: "short",
    long_details: "long",
    public_status: true,
    host_id: 1,
    created_at: "2019-08-14T15:20:28.224Z",
    updated_at: "2019-08-14T15:20:28.224Z"
  },
  {
    id: 37,
    title: "testing address input",
    location: "9 Orchard Street, Waterford, MI 48329",
    event_time: "13:30:00",
    event_date: "2019-08-17T00:00:00.000Z",
    short_details: "testing",
    long_details: "testing again",
    public_status: true,
    host_id: 1,
    created_at: "2019-08-15T17:21:56.994Z",
    updated_at: "2019-08-15T17:21:56.994Z"
  },
  {
    id: 38,
    title: "title",
    location: "4 Yawkey Way, Boston, MA 02215",
    event_time: "16:31:00",
    event_date: "2019-08-16T00:00:00.000Z",
    short_details: "",
    long_details: "",
    public_status: true,
    host_id: 1,
    created_at: "2019-08-15T20:31:26.297Z",
    updated_at: "2019-08-15T20:31:26.297Z"
  }
];

class Map extends React.Component {
  state = {
    selectedEvent: {}
  };

  componentDidMount() {
    console.log(this.props, "cdm map.js");
  }

  addressConverter = event => {
    geocodeByAddress(event.location)
      .then(results => getLatLng(results[0]))
      .then(latLng => (event.location = latLng))
      .catch(error => console.error("error", error));
  };

  render() {
    return (
      <div className="google-map">
        <GoogleMap
          defaultZoom={6}
          defaultCenter={{ lat: 39.063555, lng: -94.583268 }}
          defaultOptions={{ styles: mapStyles }}
          panTo={{ lat: 39.063555, lng: -94.583268 }}
        >
          {dummyData.map(event => {
            this.addressConverter(event);
            {
              /* console.log(event.location.lat); */
            }
            return (
              <Marker
                key={event.id}
                position={{
                  lat: parseFloat(event.location.lat), // must be an integer, not a string
                  lng: parseFloat(event.location.lng)
                }}
                //onclick event to show event details when clicking marker
                onClick={() => {
                  this.setState({ selectedEvent: event });
                }}
                //displays icon for event, using default icon for now until category icons are integrated
                icon={{
                  url: "http://prankster101.com/newsite/wp-content/uploads/event-icon.png",
                  scaledSize: new window.google.maps.Size(25, 25)
                }}
              />
            );
          })}

          {/* {this.state.selectedEvent && (
            //displays data from database based on selected park
            <InfoWindow
              position={{
                lat: this.state.selectedEvent.event.location[1],
                lng: this.state.selectedEvent.event.location[0]
              }}
              //sets default state back to null when closing event details
              onCloseClick={() => {
                this.setState({ selectedEvent: null });
              }}
            >
              <div>
                <h3>{this.state.selectedEvent.title}</h3>
                <p>{this.state.selectedEvent.properties.shortDetails}</p>
                <p>{this.state.selectedEvent.properties.eventDate}</p>
                <p>{this.state.selectedEvent.properties.eventTime}</p>
              </div>
            </InfoWindow>
          )} */}
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

import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import "../../../src/App.css"
import { Marker } from "react-google-maps";
 
// const renderFunc = ({ getInputProps, getSuggestionItemProps, suggestions }) => (
//   <div className="autocomplete-root">
//     <input {...getInputProps()} />
//     <div className="autocomplete-dropdown-container">
//       {loading && <div>Loading...</div>}
//       {suggestions.map(suggestion => (
//         <div {...getSuggestionItemProps(suggestion)}>
//           <span>{suggestion.description}</span>
//         </div>
//       ))}
//     </div>
//   </div>
// );

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
 
  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
<<<<<<< HEAD
      // .then(results => console.log(results))
      .then(latLng => {
        this.props.location(latLng.lat, latLng.lng);
      })
      // .then()
      .catch(error => console.error("Error", error));
=======
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
>>>>>>> ea385085c7cb9067457e488361f4dc6ed5884207
  };
 
  render() {
    return (
      <PlacesAutocomplete
        value={this.state.value}
        onChange={value => this.setState({ value })}
>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          // <Marker
            
          //   position={{
          //     lat: events.lat, // must be an integer, not a string
          //     lng: events.lng
          //   }}
            
          //   icon={{
          //     url: "http://prankster101.com/newsite/wp-content/uploads/event-icon.png",
          //     scaledSize: new window.google.maps.Size(25, 25)
          //   }}
          //   />
          
          <div className="location-div">
            <input
              {...getInputProps({
                placeholder: 'Enter Address to Search...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div className="dropdown-container-text"
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}
export default LocationSearchInput;

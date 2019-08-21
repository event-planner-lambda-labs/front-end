import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ""
    };
  }

  render() {
    return (
      <PlacesAutocomplete value={this.state.value} onChange={value => this.setState({ value })}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (

          <div className="event-location">
            <input
              {...getInputProps({
                placeholder: "Event Address *",
                className: "event-location-search-input"
              })}
            />
            <div className="event-autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    className="event-dropdown-container-text"
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
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
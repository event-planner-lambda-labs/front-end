import React from "react";
import PropTypes from "prop-types";

export default class SearchBox extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    onPlacesChanged: PropTypes.func
  };
  render() {
    return <input ref="input" placeholder={this.props.placeholder} type="text" />;
  }
  onPlacesChanged = () => {
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(this.searchBox.getPlaces());
    }
  };
  componentDidMount() {
    var input = React.findDOMNode(this.refs.input);
    this.searchBox = new window.google.maps.places.SearchBox(input);
    this.searchBoxListener = this.searchBox.addListener("places_changed", this.onPlacesChanged);
  }
  componentWillUnmount() {
    window.google.maps.event.removeListener(this.searchBoxListener);
  }
}

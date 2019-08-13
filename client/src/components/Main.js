import React from "react";
import MapComponent from "./map/MapComponent";
import { connect } from "react-redux";
import { getEvents } from "../store/index";

class Main extends React.Component {
  async componentDidMount() {
    await this.props.getEvents();
  }

  render() {
    return (
      <div>
        <MapComponent />
      </div>
    );
  }
}

const mapStateToProps = ({ fetchingEvents, fetchedEvents, events }) => ({
  fetchingEvents,
  fetchedEvents,
  events
});

export default connect(
  mapStateToProps,
  { getEvents }
)(Main);

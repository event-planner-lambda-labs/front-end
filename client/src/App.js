import React from "react";
import "./App.css";
import { connect } from "react-redux";
// import { Route } from "react-router-dom";
import { get } from "./reducers/index";
//import MapContainer from "./components/google-map"
import  { EventForm } from './Form/EventForm';

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
        <EventForm />
      </div>
    );
  }
}

const mapStateToProps = ({ message }) => ({
  message
});

export default connect(
  mapStateToProps,
  { get }
)(App);
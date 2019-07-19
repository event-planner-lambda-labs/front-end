import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { get } from "./reducers/index";

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

import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import NavBar from "./components/Navbar.js";
import Landing from "./components/LandingPage";
import Main from "./components/Main";
import Auth0Lock from "auth0-lock";
import Redirect from "./components/LogRedirect";
import EventForm from "./components/eventForm/EventForm";
import { connect } from "react-redux";
import { getEvents } from "../store/index";

import "./index.css";

const link = window.location.origin;

class App extends React.Component {
  async componentDidMount() {
    await this.props.getEvents();
  }

  lock = new Auth0Lock("ctJo350XuIZrh7bP4CkLgYQ03bQnELii", "gohavefun.auth0.com", {
    auth: {
      redirectUrl: `${link}/redirect`,
      responseType: "token",
      params: {
        scope: "openid email"
      }
    }
  });

  render() {
    return (
      <div className="App">
        <NavBar lock={this.lock} />
        <Route exact path="/" component={Landing} />
        <Route path="/main" component={Main} />
        <Route path="/redirect" render={props => <Redirect {...props} lock={this.lock} />} />
        <PrivateRoute path="/createEvent" component={EventForm} />
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
)(App);

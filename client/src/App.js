import React from "react";
import { Route } from "react-router-dom";
import Auth0Lock from "auth0-lock";
import { connect } from "react-redux";
import { getEvents } from "./store/index";
import PrivateRoute from "./auth/PrivateRoute";
import Landing from "./components/LandingPage";
import Main from "./components/Main";
import Redirect from "./components/Redirect";
import EventForm from "./components/eventForm/EventForm";

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
        <Route exact path="/" component={Landing} />
        <Route path="/main" render={props => <Main {...props} lock={this.lock} />} />
        <Route path="/redirect" render={props => <Redirect {...props} lock={this.lock} />} />
        <PrivateRoute path="/createEvent" component={EventForm} lock={this.lock} />
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
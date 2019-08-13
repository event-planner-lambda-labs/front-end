import React from "react";
import { Route } from "react-router-dom";
<<<<<<< HEAD
import { get } from "./reducers/index";
import MapContainer from "./components/google-map"
=======
import PrivateRoute from "./auth/PrivateRoute";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Main from "./components/Main";
import Auth0Lock from "auth0-lock";
import Redirect from "./components/LogRedirect";
import EventForm from "./components/eventForm/EventForm";
>>>>>>> 0929fc0e245b043cc16091ec9cf8543d42fe8796

const link = window.location.origin;

export default class App extends React.Component {
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
        <Route path="/welcome" component={LandingPage} />
        <Route path="/main" component={Main} />
        <Route path="/redirect" render={props => <Redirect {...props} lock={this.lock} />} />
        <PrivateRoute path="/createEvent" component={EventForm} />
      </div>
    );
  }
}
<<<<<<< HEAD

const mapStateToProps = ({ message }) => ({
  message
});

export default connect(
  mapStateToProps,
  { get }
)(App);
=======
>>>>>>> 0929fc0e245b043cc16091ec9cf8543d42fe8796

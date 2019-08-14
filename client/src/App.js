import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Main from "./components/Main";
import Auth0Lock from "auth0-lock";
import Redirect from "./components/LogRedirect";
import EventForm from "./components/eventForm/EventForm";
import Header from "./marketing/Header";
import Content from "./marketing/Content";
import "../src/marketing/styles.css";

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
        <Route exact path="/" component={LandingPage} />
        <Route path="/main" component={Main} />
        <Route path="/redirect" render={props => <Redirect {...props} lock={this.lock} />} />
        <PrivateRoute path="/createEvent" component={EventForm} />
        <Header />
        <Content /> 
      </div>
    );
  }
}

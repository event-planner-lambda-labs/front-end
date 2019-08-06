import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from './auth/PrivateRoute'
import NavBar from "./components/Navbar";
import MarketPage from './components/MarketPage';
import Main from './components/Main'
import Auth0Lock from 'auth0-lock'
import Welcome from "./components/Welcome";

export default class App extends React.Component {

  lock = new Auth0Lock(
    'ctJo350XuIZrh7bP4CkLgYQ03bQnELii',
    'gohavefun.auth0.com',
    {
      auth: {
        redirectUrl: 'http://localhost:3000/welcome',
        responseType: 'token',
        params: {
          scope: 'openid email'
        }
      }
    }
  );

  render() {
    return (
      <div className="App">
        <NavBar lock={this.lock} />
        <Route exact path='/' component={MarketPage} />
        <Route path='/welcome' render={props => <Welcome {...props} lock={this.lock} />} />
        <PrivateRoute path='/auth' component={Main} />
      </div>
    );
  };
};
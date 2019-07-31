import React from "react";
// import { connect } from "react-redux";
import { Route } from "react-router-dom";
import PrivateRoute from './auth/PrivateRoute'
import NavBar from "./components/Navbar";
import MarketPage from './components/MarketPage';
import Main from './components/Main'
// import { get } from "./reducers/index";

// class App extends React.Component {

  // componentDidMount() {
  //   this.props.get();
  // };

  // render() {
    // console.log(this.props.message);
    export default function App () {
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' component={MarketPage}/> 
        <PrivateRoute path='/auth' component={Main}/>
      </div>
    );
  // };
};

// const mapStateToProps = ({ message }) => ({
//   message
// });

// export default connect(
//   mapStateToProps,
//   { get }
// )(App);
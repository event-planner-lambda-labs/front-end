import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  btnClicked = path => {
    this.props.history.push(`/${path}`);
    setTimeout(() => {
      this.setState({ isOpen: false });
    }, 500);
  };

  render() {
    return (
      <header className="landingHeader">
        {/* <img className="headerPic" src={Fun} alt="" /> */}
        <div className="head">
          <h1>Go Have Fun</h1>
          <div>
            <p className="slogan">
             A simpler and faster way to find events near you
            </p>
            <button className="contact" onClick={() => this.btnClicked("main")}>
              FIND AN EVENT
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);

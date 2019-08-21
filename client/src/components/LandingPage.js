import React, { Component } from "react";
import Header from "../marketing/Header";
import Content from "../marketing/Content";
import Footer from "./Footer";

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Landing;

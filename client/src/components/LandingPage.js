import React, { Component } from "react";
import { Button } from "@material-ui/core";
import Header from "../marketing/Header";
import Content from "../marketing/Content";
import "../marketing/styles.css";

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default Landing;

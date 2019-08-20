import React, { Component } from "react";
import { Button } from "@material-ui/core";

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          © 2019
          <a href="https://github.com/event-planner-lambda-labs">GitHub</a>
          <a href="https://lambdaschool.com/">Lambda School</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://www.facebook.com">Facebook</a>
          <a href="https://www.instagram.com">Instagram</a>
          <a href="https://www.linkedin.com">LinkedIn</a>
        </p>
      </footer>
    );
  }
}

export default Footer;

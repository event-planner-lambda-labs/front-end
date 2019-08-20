import React, { Component } from "react";
import { Button } from "@material-ui/core";

class Footer extends Component {
  render() {
    return (
      <footer>
        © 2019
        <a href="https://lambdaschool.com/" target="_blank">
          Lambda School
        </a>
        <a href="https://github.com/event-planner-lambda-labs" target="_blank">
          <i className="fab fa-github" />
        </a>
        <a href="https://twitter.com" target="_blank">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <i className="fab fa-facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <i className="fab fa-instagram" />
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <i className="fab fa-linkedin-in" />{" "}
        </a>
      </footer>
    );
  }
}

export default Footer;

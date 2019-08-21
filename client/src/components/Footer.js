import React, { Component } from "react";
// import { Button } from "@material-ui/core";

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>© 2019</p>
        <a href="https://lambdaschool.com/">Lambda School</a>
        <a href="https://github.com/event-planner-lambda-labs">
          <i className="fab fa-github" />
        </a>
        <a href="https://twitter.com">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://www.facebook.com">
          <i className="fab fa-facebook" />
        </a>
        <a href="https://www.instagram.com">
          <i className="fab fa-instagram" />
        </a>
        <a href="https://www.linkedin.com">
          <i className="fab fa-linkedin-in" />
        </a>
      </footer>
    );
  }
}

export default Footer;

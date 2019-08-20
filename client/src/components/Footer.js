import React, { Component } from "react";
import { Button } from "@material-ui/core";

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          © 2019
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="https://github.com/event-planner-lambda-labs">GitHub</a>
          <a href="https://github.com/event-planner-lambda-labs/front-end/blob/master/LICENSE">
            License
          </a>
          <a href="https://lambdaschool.com/">Lambda School</a>
          <a href="https://twitter.com">twitter</a>
          <a href="https://www.facebook.com">facebook</a>
          <a href="https://www.instagram.com">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com">
            <i class="fab fa-linkedin"></i>
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;

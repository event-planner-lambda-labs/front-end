import React, { Component } from "react";
// import { Button } from "@material-ui/core";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-links">
          <a href="https://lambdaschool.com/">Lambda School</a>
          <a
            href="https://github.com/event-planner-lambda-labs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>

        <p>© 2019</p>
      </footer>
    );
  }
}

export default Footer;

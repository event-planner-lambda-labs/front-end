import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-links">
          <a href="https://lambdaschool.com/" target="_blank" rel="noopener noreferrer">
            Lambda School
          </a>

          <a href="https://twitter.com/GoHaveFunApp" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter" />
          </a>
          <a
            href="https://www.facebook.com/GoHaveFunApp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook" />
          </a>
          <a
            href="https://www.instagram.com/gohavefunapp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram" />
          </a>
        </div>

        <p>© 2019</p>
      </footer>
    );
  }
}

export default Footer;

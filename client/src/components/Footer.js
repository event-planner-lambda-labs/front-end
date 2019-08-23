import React, { Component } from "react";
// import { Button } from "@material-ui/core";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-links">
          <a href="https://lambdaschool.com/">Lambda School</a>
          
          <a href="https://twitter.com/GoHaveFun2">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://www.facebook.com">
            <i className="fab fa-facebook" />
          </a>
          <a href="https://www.instagram.com/gohavefun1">
            <i className="fab fa-instagram" />
          </a>
          
        </div>
        
        <p>© 2019</p>
        
      </footer>
    );
  }
}

export default Footer;

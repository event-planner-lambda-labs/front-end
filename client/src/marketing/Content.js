import React, { Component } from "react";
import Anne from "../anne.png";
import Dani from "../dani.png";
import Preston from "../preston.jpg";
import David from "../david.jpg";
import Mike from "../mike.png";

class Content extends Component {
  render() {
    return (
      <main>
        <section className="intro">
          <div className="Mission">
            <section>
              <h2>We Have A Mission</h2>
              <div>
                <p>
                  Put simply, we want to quickly and easily connect
                  our users to events located near them. Our intent is that
                  events are free and accessible to everyone to host and attend.
                </p>
              </div>
            </section>
          </div>

          <div className="about">
            <h2>The Team</h2>

            <div className="team-row">
              <div className="team">
                <img className="teamPic" src={Preston} alt="" />
                <h3>Preston Burton</h3>
                <p>Team Lead / FullStack Developer</p>
                <a href="https://github.com/Oliver-Strange">
                  <i className="fab fa-github" />
                </a>
                <a href="https://www.linkedin.com/in/preston-burton-447108186/">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            {/* </div> */}

            {/* <div className="team-row"> */}
              <div className="team">
                <img className="teamPic" src={David} alt="" />
                <h3>David Barrios</h3>
                <p>FullStack Developer</p>
                <a href="https://github.com/dbarrios13">
                  <i className="fab fa-github" />
                </a>
                <a href="https://www.linkedin.com/in/david-a-barrios/">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>

              <div className="team">
                <img className="teamPic" src={Anne} alt="" />
                <h3>Anne Tolmie</h3>
                <p>FullStack Developer</p>
                <a href="https://github.com/atolmie">
                  <i className="fab fa-github" />
                </a>
                <a href="https://www.linkedin.com/in/anne-tolmie-7799434a/">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            {/* </div> */}

            {/* <div className="team-row"> */}
              <div className="team">
                <img className="teamPic" src={Dani} alt="" />
                <h3>Danielle O'Neal</h3>
                <p>FullStack Developer</p>
                <a href="https://github.com/droneal11015">
                  <i className="fab fa-github" />
                </a>
                <a href="https://www.linkedin.com/in/danielleoneal/">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>

              <div className="team">
                <img className="teamPic" src={Mike} alt="" />
                <h3>Michael Del Zotto</h3>
                <p>FullStack Developer</p>
                <a href="https://github.com/mdelzotto">
                  <i className="fab fa-github" />
                </a>
                <a href="https://www.linkedin.com/in/michaeldelzotto/">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div>
          <div className="services">
            <div className="service-one">
              <p className="service-icon">
                <i className="far fa-calendar-alt" />
              </p>
              <p className="service-title">Current Features</p>
              <p>Login Create Event</p>
            </div>
            <div className="service-two">
              <p className="service-icon">
                <i className="fas fa-crop" />
              </p>
              <p className="service-title">Future Features</p>
              <p>Business Accounts Group Accounts Event Categories</p>
            </div>
            <div className="service-three">
              <p className="service-icon">
                <i className="fas fa-code" />
              </p>
              <p className="service-title">Contact Us</p>
              <p>Facebook, Twitter, Instagram</p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Content;

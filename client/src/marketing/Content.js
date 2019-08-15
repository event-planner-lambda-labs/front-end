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
          <h1>About Us</h1>

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
          </div>

          <div className="team-row">
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
          </div>

          <div className="team-row">
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
              <h3>Micheal Del Zotto</h3>
              <p>FullStack Developer</p>
              <a href="https://github.com/mdelzotto">
                <i className="fab fa-github" />
              </a>
              <a href="https://www.linkedin.com/in/michaeldelzotto/">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>

          <div>
            <p>We are all Lambda School students.</p>
          </div>
        </section>

        <div>
          <div className="services">
            <div className="service-one">
              <p className="service-icon">
                <i className="far fa-calendar-alt" />
              </p>
              <p className="service-title">Planning</p>
              <p>
                Our team utilized a product vision board to plan our
                application. Next we created three feature canvases and assigned
                tickets based on what features we necessary for each canvas.
              </p>
            </div>
            <div className="service-two">
              <p className="service-icon">
                <i className="fas fa-crop" />
              </p>
              <p className="service-title">Design</p>
              <p>
                Our goal was to have a product design that was simple,
                functional, responsive, and easy to use. Based on our research,
                we determined that we would be designing an application for
                users who were interested in attending events and hosting
                events.
              </p>
            </div>
            <div className="service-three">
              <p className="service-icon">
                <i className="fas fa-code" />
              </p>
              <p className="service-title">Development</p>
              <p>
                We utilized the following in creating our application: React,
                Node JS, PostgresSQL, Auth0, Google Maps API, and Material UI.
              </p>
            </div>
          </div>
        </div>

        <div className="Mission">
          <section>
            <h2>Our Mission</h2>
            <div>
              <p>
                Put simply, our main focus was to bring a simple, fast way to
                connect our users to events. We also wanted to create something
                that users wanted.We sent out a survey and based on user feeback, there were three
                things we wanted to ensure we did:
              
              
                <li>
                  Events are easily and quickly found around where a user is
                  located.
                </li>
                <li>
                  Events can always be free and accessible with ease to everyone
                  to host and attend.
                </li>
                <li>
                  Events have no dependencies like groups - they are free and
                  quick to setup.
                </li>
              </p>
            </div>
          </section>
        </div>

        <div className="contactUsWrapper">
          <section className="contactUs">
            <h2>Contact Us</h2>
            <p>labs.eventplanner@gmail.com</p>
          </section>
        </div>
      </main>
    );
  }
}

export default Content;

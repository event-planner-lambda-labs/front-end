import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import teamData from "./teamData";
import MemberContent from "./MemberContent";
import Features from "../pictures/features.jpeg";
import Upcoming from "../pictures/upcoming.jpeg";
import Map from "../pictures/map.png";

class Content extends Component {
  btnClicked = path => {
    this.props.history.push(`/${path}`);
  };

  render() {
    return (
      <main>
        <section className="intro">
          <div className="Mission" data-aos="fade-left" data-aos-duration="3000">
            <section>
              <h2>We Have A Mission</h2>
              <div>
                <p>
                  Put simply, we want to quickly and easily connect our users to events located near
                  them. Our intent is that events are free and accessible to everyone to host and
                  attend.
                </p>
              </div>
            </section>
          </div>

          <div className="services">
            <div className="service-one">
              <div data-aos="fade-right" data-aos-duration="3000">
                <img src={Features} alt="Featues" />
              </div>
              <div data-aos="fade-left" data-aos-duration="3000">
                <h3 className="service-title">Current Features</h3>
                <p>Easily Search and Attend Events</p>
                <p>Create an Account to add an Event</p>
              </div>
            </div>
            <div className="service-two">
              <div data-aos="fade-right" data-aos-duration="3000">
                <h3 className="service-title">Future Features</h3>
                <p>Add Business Accounts</p>
                <p>Add Group Accounts</p>
                <p>Filter Events by Categories</p>
                <p>RSVP to an Event</p>
              </div>
              <div data-aos="fade-left" data-aos-duration="3000">
                <img src={Upcoming} alt="Upcoming" />
              </div>
            </div>
          </div>

          <div
            className="map"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={Map} alt="Map" />
            <div>
              <button className="contact" onClick={() => this.btnClicked("main")}>
                FIND AN EVENT
              </button>
            </div>
          </div>

          <div className="about">
            <h2>The Team</h2>

            <div className="team-row">
              {teamData.map(member => {
                return (
                  <>
                    <MemberContent data={member} />
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default withRouter(Content);

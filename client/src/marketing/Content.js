import React, { Component } from "react";
import teamData from './teamData';
import MemberContent from './MemberContent';

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

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
              <a href="https://github.com/Oliver-Strange">https://github.com/Oliver-Strange</a>
            </div>
            </div>

            <div className="team-row">
            <div className="team">
              <img className="teamPic" src={David} alt="" />
              <h3>David Barrios</h3>
              <p>FullStack Developer</p>
              <a href="https://github.com/dbarrios13">https://github.com/dbarrios13</a>
            </div>

            <div className="team">
              <img className="teamPic" src={Anne} alt="" />
              <h3>Anne Tolmie</h3>
              <p>FullStack Developer</p>
              <a href="https://github.com/atolmie">https://github.com/atolmie</a>
            </div>
          </div>
          

          <div className="team-row">
            <div className="team">
              <img className="teamPic" src={Dani} alt="" />
              <h3>Danielle O'Neal</h3>
              <p>FullStack Developer</p>
              <a href="https://github.com/droneal11015">https://github.com/droneal11015</a>
            </div>

            <div className="team">
              <img className="teamPic" src={Mike} alt="" />
              <h3>Micheal Del Zotto</h3>
              <p>FullStack Developer</p>
              <a href="https://github.com/mdelzotto">https://github.com/mdelzotto</a>
            </div>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              vel gravida nisi. Vestibulum ac consequat lorem. In in mi massa.
              Donec ut tellus sit amet sem ornare fermentum at et nunc.
              Pellentesque ac elementum metus. Praesent non venenatis lacus. In
              sagittis urna in nulla sagittis mattis.
            </p>
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
                Mauris vitae turpis ut sem blandit consequat et at ligula.
                Suspendisse quam lectus, tristique dapibus sapien et, tempus
                suscipit nisl.
              </p>
            </div>
            <div className="service-two">
              <p className="service-icon">
                <i className="fas fa-crop" />
              </p>
              <p className="service-title">Design</p>
              <p>
                Nulla eu metus faucibus, vehicula tortor quis, venenatis odio.
                Nullam purus mauris, feugiat in odio vitae, posuere volutpat
                libero. Sed et convallis libero.
              </p>
            </div>
            <div className="service-three">
              <p className="service-icon">
                <i className="fas fa-code" />
              </p>
              <p className="service-title">Development</p>
              <p>
                Ut ornare vitae enim a rhoncus. Nullam aliquet tristique
                scelerisque. Sed volutpat dictum risus ac laoreet. Suspendisse
                id lorem in enim sollicitudin varius.
              </p>
            </div>
          </div>
        </div>

        <section>
          <h2>Our Mission</h2>
          <div>
            <p>
              Integer sit amet venenatis erat. Cras elementum tortor odio, sit
              amet euismod nunc cursus ut. Donec sollicitudin orci sed enim
              volutpat, volutpat rutrum magna semper. Fusce leo lacus, pulvinar
              sit amet dignissim in, consectetur eget nulla. Etiam ac turpis
              augue. Sed tincidunt pulvinar tincidunt. Integer ac blandit magna.
              Nulla dapibus convallis luctus.{" "}
            </p>
            <p>
              Ut elementum urna sit amet elit egestas hendrerit. Vivamus quis
              sem fringilla, tincidunt nisi non, congue libero. Etiam cursus
              nulla quis sapien varius, eget accumsan augue mattis. Cras
              accumsan sapien nulla, eu eleifend odio tempus sit amet.
              Suspendisse gravida hendrerit sapien, ut molestie mi pellentesque
              eget. Aliquam eleifend velit vel libero elementum, vitae
              consectetur nisl sollicitudin. Suspendisse volutpat fringilla
              vehicula.
            </p>
          </div>
        </section>

        <section>
          <h2>Contact Us</h2>
        </section>
      </main>
    );
  }
}

export default Content;

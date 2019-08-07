import React from "react";

class Redirect extends React.Component {
  componentDidMount() {
    this.props.lock.on("authenticated", function(authResult) {
      this.getUserInfo(authResult.accessToken, function(error, profile) {
        if (error) {
          return;
        }
        localStorage.setItem("token", authResult.accessToken);
        localStorage.setItem("profile", JSON.stringify(profile));
      });
    });

    setTimeout(() => {
      this.props.history.push("/main");
    }, 2500);
  }

  render() {
    return (
      <div>
        <p>stuff</p>
      </div>
    );
  }
}

export default Redirect;

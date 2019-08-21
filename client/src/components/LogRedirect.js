import React from "react";
import { connect } from 'react-redux'
import { getUsers } from '../store/index'
import AddModal from "./LogRedirects/AddModal";
import BackModal from "./LogRedirects/BackModal";
import { CircularProgress } from '@material-ui/core'

class Redirect extends React.Component {

  state = {
    currentUser: '',
    email: ''
  }

  async componentDidMount() {

    await this.props.lock.on("authenticated", function (authResult) {
      this.getUserInfo(authResult.accessToken, function (error, profile) {
        if (error) {
          return;
        }
        localStorage.setItem("token", authResult.accessToken);
        localStorage.setItem("profile", JSON.stringify(profile));
      });
    });

    setTimeout(() => {
      this.props.getUsers();
    }, 1500)
  }

  modalRender = (users, localEmail) => {
    let currentUser;
    let email = localEmail ? JSON.parse(localStorage.profile).email : '';
    users.filter(user => {
      if (email === user.email) {
        return currentUser = user;
      } else {
        return currentUser;
      }
    })
    if (currentUser) {
      return <BackModal props={this.props} user={currentUser} />
    } else {
      return <AddModal props={this.props} />
    }
  }

  render() {
    return (
      <div>
        {this.props.fetchedUsers ? (
          this.modalRender(this.props.allUsers, localStorage.profile)
          ) : (
            <CircularProgress />
          )}
      </div>
    );
  }
}

const mapStateToProps = ({ allUsers, user, fetchingUsers, fetchedUsers }) => ({
  allUsers,
  user,
  fetchingUsers,
  fetchedUsers
});

export default connect(mapStateToProps, { getUsers })(Redirect);
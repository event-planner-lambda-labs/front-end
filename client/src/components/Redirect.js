import React from "react";
import { connect } from 'react-redux';
import { getUsers } from '../store/index';
import { CircularProgress } from '@material-ui/core';
import { NewUser, ReturningUser } from './LogRedirects';

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
    }, 2500)
  }

  modalRender = (users, localEmail) => {
    let currentUser;
    let email = localEmail ? JSON.parse(localStorage.profile).email : '';
    users.filter(user => {
      if (email === user.email) {
        localStorage.setItem('user', JSON.stringify(user))
        return currentUser = user;
      } else {
        return currentUser;
      }
    })
    if (currentUser) {
      return <ReturningUser user={currentUser} />
    } else {
      return <NewUser />
    }
  }

  render() {
    return (
      <div>
        {this.props.fetchedUsers ? (
          this.modalRender(this.props.allUsers, localStorage.profile)
          ) : (
            <div className='loader'>
              <CircularProgress color='secondary' thickness={5} size={100}/>
            </div>
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
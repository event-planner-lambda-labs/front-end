import React from "react";
import { withRouter } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  ListItem,
  List,
  ListItemText
} from "@material-ui/core";
import { Menu, ChevronRight } from "@material-ui/icons";

class Navigation extends React.Component {
  state = {
    isOpen: false
  };

  login = e => {
    e.preventDefault();
    this.props.lock.show();
  };

  logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("profile");
    localStorage.removeItem("user");
    this.props.history.push("/");
  };

  handleBtn = e => {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  btnClicked = path => {
    this.props.history.push(`/${path}`);
    setTimeout(() => {
      this.setState({ isOpen: false });
    }, 500);
  };

  render() {
    return (
      <>
        <AppBar className="appBar">
          <Toolbar>
            <Typography varient="h2" onClick={() => this.btnClicked("main")} className="logo">
              GoHaveFun
            </Typography>
            <IconButton edge="end" onClick={this.handleBtn}>
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer anchor="right" open={this.state.isOpen} className="navDrawer">
          <div className="drawerCloseBtn">
            <IconButton onClick={this.handleBtn} className="drawerBtn">
              <ChevronRight />
            </IconButton>
          </div>
          <List>
            <ListItem className="drawerBtn">
              <ListItemText
                primary={
                  localStorage.user
                    ? `Welcome back, ${JSON.parse(localStorage.user).username}!`
                    : ""
                }
              />
            </ListItem>
            <ListItem button onClick={() => this.btnClicked("")} className="drawerBtn">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => this.btnClicked("createEvent")} className="drawerBtn">
              <ListItemText primary="Add Event" />
            </ListItem>
            <ListItem button onClick={() => this.btnClicked("main")} className="drawerBtn">
              <ListItemText primary="Map" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfgyFUTSFv6wrUT9LDvs0pwyMx9oOECulU1aLgy2POiZw-LLA/viewform?usp=sf_link"
              className="drawerBtn"
            >
              <ListItemText primary="Submit Feedback" />
            </ListItem>
            <ListItem button onClick={localStorage.token ? this.logout : this.login}>
              <ListItemText primary={localStorage.token ? "Logout" : "Login"} />
            </ListItem>
          </List>
        </Drawer>
      </>
    );
  }
}

export default withRouter(Navigation);

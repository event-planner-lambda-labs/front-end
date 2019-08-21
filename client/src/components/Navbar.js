import React from "react";
import { withRouter } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  ListItem,
  List,
  ListItemText
} from "@material-ui/core";
import { Menu, ChevronLeft } from "@material-ui/icons";

class NavBar extends React.Component {
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

  navBtn = () => {
    if (localStorage.token) {
      return <Button onClick={this.logout}>Log Out</Button>;
    } else {
      return <Button onClick={this.login}>Login</Button>;
    }
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
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" onClick={this.handleBtn}>
              <Menu />
            </IconButton>
            <Typography varient="h2" onClick={() => this.btnClicked("main")} className="logo">
              GoHaveFun
            </Typography>
            {this.navBtn()}
          </Toolbar>
        </AppBar>

        <Drawer open={this.state.isOpen} className='navDrawer'>
          <IconButton onClick={this.handleBtn} className='drawerBtn'>
            <ChevronLeft />
          </IconButton>
          <List>
            <ListItem button onClick={() => this.btnClicked("createEvent")} className='drawerBtn'>
              <ListItemText primary="Add Event" />
            </ListItem>
          </List>
        </Drawer>
      </>
    );
  }
}

export default withRouter(NavBar);

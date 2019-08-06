import React from 'react';
import { withRouter } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

class NavBar extends React.Component {

    login = e => {
        e.preventDefault();
        this.props.lock.show();
    }

    logout = e => {
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
        this.props.history.push('/');
    }

    navBtn = () => {
        if(localStorage.token) {
            return <Button onClick={this.logout}>Log Out</Button>
        } else {
            return <Button onClick={this.login}>Login</Button>
        }
    }

    render() {
        return (
            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge='start'>
                        <Menu />
                    </IconButton>
                    <Typography varient='h2'>
                        GoHaveFun
                    </Typography>
                    {this.navBtn()}
                </Toolbar>
            </AppBar>
        );
    };
};

export default withRouter(NavBar);
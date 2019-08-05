import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

class NavBar extends React.Component {

    login = e => {
        e.preventDefault();
        this.props.lock.show();
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
                    <Button onClick={this.login}>Login</Button>
                </Toolbar>
            </AppBar>
        );
    };
};

export default NavBar;
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useAuth0 } from "../auth/react-auth0-wrapper";

const NavBar = () => {

    const { isAuthenticated, loginWithPopup, logout } = useAuth0();

    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton edge='start'>
                    <Menu />
                </IconButton>
                <Typography varient='h2'>
                    GoHaveFun
                    </Typography>
                {!isAuthenticated && (
                    <Button onClick={() => loginWithPopup()}>Log in</Button>
                )}
                {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
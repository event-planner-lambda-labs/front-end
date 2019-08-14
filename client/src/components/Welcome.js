import React, { Component } from 'react'

export default class Welcome extends Component {
    componentDidMount() {
        this.props.lock.on('authenticated', function (authResult) {
            this.getUserInfo(authResult.accessToken, function (error, profile) {
                if (error) {
                    return;
                }
                localStorage.setItem('token', authResult.accessToken);
                localStorage.setItem('profile', JSON.stringify(profile));
            });
        });

        setTimeout(() => {
            this.props.history.push('/auth')
        }, 2500);
    };

    render() {
        return (
            <>
                <h2>Welcome to GoHaveFun</h2>
            </>
        );
    };
};
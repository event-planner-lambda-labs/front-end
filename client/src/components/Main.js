import React from 'react';

class Main extends React.Component {

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
    };



    render() {
        if (localStorage.profile) {
            return (
                <>
                    <h2>Welcome ${localStorage.profile.name}</h2>
                </>
            );
        } else {
            return (

                <div>
                    Loading profile
            </div>
            );
        }
    };
};

export default Main;
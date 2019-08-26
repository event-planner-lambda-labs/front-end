import React from 'react';
import { withRouter } from 'react-router-dom';

function ReturningUser (props) {

    const username = props.user.username;

    setTimeout(() => {
        props.history.go(-2);
    }, 1500);

    return (
        <div className='redirectPage'>
            <div className='content'>
                <h2>Welcome, Back</h2>
                <p>{username}</p>
            </div>
        </div>
    ); 
};

export default withRouter(ReturningUser);
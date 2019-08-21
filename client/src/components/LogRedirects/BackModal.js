import React from 'react'
import { withRouter } from 'react-router-dom'

function BackModal (props) {

    const username = props.user.username;

    setTimeout(() => {
        props.history.go(-2);
    }, 1500)
    return (
        <div className='redirectPage'>
            <h2>Welcome, Back</h2>
            <p>{username}</p>
        </div>
    )
}

export default withRouter(BackModal);
import React from 'react'
import { withRouter } from 'react-router-dom'
// import { Modal } from '@material-ui/core'

function BackModal (props) {

    const username = props.user.username;

    setTimeout(() => {
        console.log(props)
        props.history.push('/main');
    }, 1500)
    return (
        <div>
            <h2>Welcome, Back</h2>
            <p>{username}</p>
        </div>
    )
}

export default withRouter(BackModal);
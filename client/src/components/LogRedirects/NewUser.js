    
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { postUser } from '../../store/index';
import { TextField, Button } from '@material-ui/core';

class NewUser extends Component {
    state = {
        username: ''
    };

    handleChanges = e => {
        this.setState({
            username: e.target.value
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        const user = {
            username: this.state.username,
            email: JSON.parse(localStorage.profile).email
        };
        await this.props.postUser(user);
        setTimeout(() => {
            this.props.history.go(-2);
        }, 1500);
    };

    render () {
        return (
            <div className='redirectPage'>
                <div className='content'>
                    <form onSubmit={this.handleSubmit}>
                        <TextField 
                            label='Create a username'
                            onChange={this.handleChanges}
                            value={this.state.username}
                            required
                        />
                        <Button onClick={this.handleSubmit} variant='contained' primary={true} >Submit</Button>
                    </form>
                </div>
            </div>
        );
    };
};

const mapStateToProps = ({ postingUser, postedUser }) => ({
    postingUser,
    postedUser
});

export default withRouter(connect(mapStateToProps, { postUser })(NewUser));
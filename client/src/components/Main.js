import React from 'react';
import { useAuth0 } from '../auth/react-auth0-wrapper';

const Main = () => {
    const { loading, user } = useAuth0();

    if( loading || !user ) return "Loading";

    return (
        <>
            <img src={user.picture} alt='Profile'/>

            <h2>Welcome, {user.name}</h2>
        </>
    );
};

export default Main;
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './auth';

export const ProtectedAdminRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={
            props => {
                if(auth.isAdmin() === true) {
                    return <Component {...props}/>
                } else {
                    return <Redirect to={
                        {
                            pathname: '/notAuthorized', 
                            state: { from: props.location }
                        }
                    } />
                }
            }
        }/>
    )
}

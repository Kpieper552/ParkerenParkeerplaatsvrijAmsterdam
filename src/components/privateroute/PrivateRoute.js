import React from 'react';
import '../../App.css';
import { useAuth } from '../../context/SignupContext';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
     const { currentUser } = useAuth()

    return (
        <Route>

            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/login"/>
        }}
        </Route>

);
}
////
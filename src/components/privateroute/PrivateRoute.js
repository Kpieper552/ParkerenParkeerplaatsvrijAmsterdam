import React from 'react';
import '../../App.css';
import { useAuth } from '../../context/SignupContext';
import { Route, Redirect, Switch } from 'react-router-dom';
import MyAccount from "../my-account/MyAccount";


function PrivateRoute({ childern, authenticated, ...rest }
    ) {
    const { currentUser } = useAuth()

    return(

        <Route
            {...rest}>
            {authenticated === true ? currentUser :
                <Switch><Route to="account"><MyAccount/></Route></Switch>}
            {currentUser ? childern : <Redirect to="/login"/>}

        </Route>
    );
}

export default PrivateRoute
//
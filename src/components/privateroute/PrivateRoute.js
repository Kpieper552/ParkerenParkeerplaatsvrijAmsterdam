import React from 'react';
import '../../App.css';
import { useAuth } from '../../context/SignupContext';
import { Route, Switch, Redirect } from 'react-router-dom';
import MyAccount from "../my-account/MyAccount";
import TabBarMenuAccount from "../tabbar/TabBarMenuAccount";
import AccountParkingAmsterdam from "../../pages/Account/AccountParkingAmsterdam";
import AccountParkingAmsterdamFreePlaces from "../../pages/Account/AccountParkingAmsterdamFreePlaces";


function PrivateRoute({ children, authenticated, ...rest }
    ) {
    const { currentUser } = useAuth()

    return(

        <Route
            {...rest}>
            {currentUser ? children: <Redirect to="/login"/>}
            {authenticated === true ? currentUser :
                <Switch><Route to="account"><MyAccount/>
                {/*TAB -------------------- */}
                <div className="parkingAdam-content">
                    <TabBarMenuAccount/>
                    <div className="tab-wrapper">
                        <Switch>
                            <Route exact path="/account">
                                <AccountParkingAmsterdam/>
                            </Route>
                            <Route path="/account/AccountParkingAmsterdamFreePlaces">
                                <AccountParkingAmsterdamFreePlaces />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Route></Switch>}
        </Route>
    );
}

export default PrivateRoute
//   {authenticated === true ? currentUser : <Switch><Route to="account"><MyAccount/></Route></Switch>}
//{currentUser ? childern : <Redirect to="/login"/>}
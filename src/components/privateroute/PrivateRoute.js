import React, { useEffect } from 'react';
import '../../App.css';
import { useAuth } from '../../context/SignupContext';
import { Route, Switch, Redirect } from 'react-router-dom';
import MyAccount from "../my-account/MyAccount";
import TabBarMenuAccount from "../tabbar/TabBarMenuAccount";
import AccountParkingAmsterdam from "../../pages/Account/AccountParkingAmsterdam";
import AccountParkingAmsterdamFreePlaces from "../../pages/Account/AccountParkingAmsterdamFreePlaces";
import ContentMyAccount from "../content/ContentMyAccount";



function PrivateRoute({ children, authenticated, ...rest }
    ) {
    const { currentUser } = useAuth()

    useEffect(() => {
        const timer = setTimeout(() => {

        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return    (
        <Route
            {...rest}>
            {currentUser ? children: <Redirect to="/login"/>}
            {authenticated === true ? currentUser :
                <Switch><Route to="account">
                    <MyAccount/>
                  {/*TAB -------------------- */}
                <div className="parkingAdam-content">
                    <ContentMyAccount/>
                    <TabBarMenuAccount/>
                    <div className="tab-wrapper">
                        <Switch>
                            <Route exact path="/account/accountparkingamsterdam">
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

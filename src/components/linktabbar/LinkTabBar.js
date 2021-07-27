import React from 'react';
import { NavLink } from 'react-router-dom';


function LinkTabBar ( { reflink, titleref }) {
    return (
                    <NavLink activeClassName="active" to={reflink}>
                        {titleref}
                    </NavLink>

    );
};

export default LinkTabBar;
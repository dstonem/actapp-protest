import React from "react"
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

function Header() {

    //if fetch from first time user returns true, display the survey

    return (
        <HashRouter>
            <nav className="headerNav" id="headerNav">
                <h1><span className="green">act</span>app<span className="white-on-black">protest</span></h1>
                <NavLink to='/EventFeed'><img src="/images/icons/home_icon.png" alt="Feed" width="30" /></NavLink>
                <NavLink to='/EventCreator'><img src="/images/icons/plus_icon2.png" alt="Upload" width="30" /></NavLink>
                <NavLink to='/UserProfile'><img src="/images/icons/profile_icon3.png" alt="Profile" width="31" /></NavLink>
            </nav>
        </HashRouter>
    )
}

export default Header
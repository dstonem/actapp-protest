import React from "react"
import {
    Route,
    Link,
    HashRouter
  } from "react-router-dom";

function Nav() {

    //if fetch from first time user returns true, display the survey

    return (
        <div className="nav">
            <Link to='/PostsFeed'><img src="/images/icons/people_icon.png" alt="Feed" width="30" /></Link>
            <Link to='/EventFeed'><img src="/images/icons/events_icon.png" alt="Feed" width="30" /></Link>
            <Link to='/EventCreator'><img src="/images/icons/plus_icon3.png" alt="Upload" width="30" /></Link>
            <Link to='/Search'><img src="/images/icons/search_icon.png" alt="Upload" width="30" /></Link>
            <Link to='/UserProfile'><img src="/images/icons/profile_icon4.png" alt="Profile" width="31" /></Link>
        </div>
    )
}

export default Nav
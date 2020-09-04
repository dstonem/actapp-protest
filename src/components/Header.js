import React from "react"
import {
    Route,
    Link,
    HashRouter
  } from "react-router-dom";

function Header() {

    //if fetch from first time user returns true, display the survey

    return (
        <nav className="header" id="header">
            <h1><span className="green">act</span>app<span className="white-on-black">protest</span></h1>
        </nav>
    )
}

export default Header
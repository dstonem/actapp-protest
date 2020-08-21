import React from "react"

function Header() {
    return (
        <nav className="headerNav" id="headerNav">
            <h1><span className="green">act</span>app<span className="white-on-black">protest</span></h1>
            <a href="/feed"><img src="/images/icons/home_icon.png" alt="Feed" width="30" /></a>
            <a href="/upload"><img src="/images/icons/plus_icon2.png" alt="Upload" width="30" /></a>
            <a href='/profile'><img src="/images/icons/profile_icon3.png" alt="Profile" width="31" /></a>
        </nav>
    )
}

export default Header
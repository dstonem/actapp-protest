import React from "react"

function LoginForm() {
    return(
        <div className="lr-container">
            <div className="main-content">
                <div className="header">
                    <h1><span className="green">act</span>app<span className="white-on-black">protest</span></h1>
                </div>
                <form action="/login" method="post">
                    <fieldset>
                    <legend className="logintext">Login/Register</legend>
                    <input name="username" type="text" placeholder="Enter Username" className="input-1" />
                    <input name="password" type="password" placeholder="Enter Password" className="input-2"/>
                    <button className="bttn">Submit</button>
                    </fieldset>
                </form>
                </div>
            <div className="lr-link">
                <div className="s-part">
                    New?<a href="/login/register"> Register Here!</a>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
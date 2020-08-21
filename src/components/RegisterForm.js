import React from "react"

function LoginForm() {
    return(
        <div id="r-container">
            <div className="register-content">
            <div className="header">
                <h1><span className="green">act</span>app<span className="white-on-black">protest</span></h1>
            </div>
                    <form action="/login/register" method="post">
                        <fieldset>
                            <legend className="registertext">Register</legend>
                            <div className="input-wrapper">
                                <div className="form-inputs">
                                    <input name="username" type="text" placeholder="Enter Username" className="input-1"/>
                                    <input name="password" type="password" placeholder="Enter Password" className="input-1"/>
                                    <input name="confirm-password" type="password" placeholder="Confirm Password" className="input-1"/>
                                    <input name="firstName" type="text" placeholder="Enter First Name" className="input-1"/>
                                    <input name="lastName" type="text" placeholder="Enter Last Name" className="input-1"/>
                                </div>
                                <div className="form-inputs1">
                                    <input name="email" type="email" placeholder="Enter Email" className="input-1"/>
                                    <input name="streetaddress" type="text" placeholder="Home Address" className="input-2"/>
                                    <input name="city" type="text" placeholder="Enter City" className="input-2" />
                                    <input name="state" type="text" placeholder="Enter State" className="input-2"/>
                                    <input name="zipcode" type="text" placeholder="Enter Zipcode" className="input-2" />
                                </div>
                            </div>
                            <button type="submit" type="text" value="submit" className="bttn">Sign Up</button>
                        </fieldset>
                    </form>
            </div>
                <div className="lr-link">
                    <div className="s-part">
                        Already Have an Account?<a href="/login"> Login Here!</a>
                    </div>
                </div>
        </div>
    )
}

export default LoginForm
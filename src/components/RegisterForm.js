import React from "react"
import { Link } from "react-router-dom";

function RegisterForm({ user, setUser }) {

    return (
        <div className="register-form">
            <div className="register-content">
                <form action="/login/register" method="POST">
                    <div className="input-wrapper">
                        <fieldset>
                            <legend className="registertext">Register</legend>
                            <input name="username" type="text" placeholder="Enter Username" className="input-1" />
                            <input name="password" type="password" placeholder="Enter Password" className="input-1" />
                            <input name="confirm-password" type="password" placeholder="Confirm Password" className="input-1" />
                        </fieldset>
                        <fieldset>
                            <input name="firstName" type="text" placeholder="Enter First Name" className="input-1" />
                            <input name="lastName" type="text" placeholder="Enter Last Name" className="input-1" />
                            <input name="email" type="email" placeholder="Enter Email" className="input-1" />
                        </fieldset>
                        <fieldset>
                            <input name="streetaddress" type="text" placeholder="Home Address" className="input-2" />
                            <input name="city" type="text" placeholder="Enter City" className="input-2" />
                            <input name="state" type="text" placeholder="Enter State" className="input-2" />
                            <input name="zipcode" type="text" placeholder="Enter Zipcode" className="input-2" />
                        </fieldset>
                    </div>
                    <button type="submit" type="text" value="submit" className="bttn">Sign Up</button>
                </form>
            </div>
            <div className="lr-link">
                <div className="s-part">
                    Already Have an Account?<Link to="/LoginForm" onLogIn={() => setUser(true)}> <span className="green bold">Login Here!</span></Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
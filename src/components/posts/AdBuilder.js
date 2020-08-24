import React from "react"

function AdBuilder({message}) {
    return (
        <div>
            <form>
                <fieldset>
                    <legend class="registertext">Build Your Ad</legend>
                    <p class="errortext">{message}</p>
                    <div class="input-wrapper">
                        <div class="form-inputs">
                            <input name="username" type="text" placeholder="Enter Username" class="input-1"/>
                            <input name="password" type="password" placeholder="Enter Password" class="input-1"/>
                            <input name="confirm-password" type="password" placeholder="Confirm Password" class="input-1"/>
                            <input name="firstName" type="text" placeholder="Enter First Name" class="input-1"/>
                            <input name="lastName" type="text" placeholder="Enter Last Name" class="input-1"/>
                        </div>
                        <div class="form-inputs1">
                            <input name="email" type="email" placeholder="Enter Email" class="input-1"/>
                            <input name="streetaddress" type="text" placeholder="Home Address" class="input-2"/>
                            <input name="city" type="text" placeholder="Enter City" class="input-2" />
                            <input name="state" type="text" placeholder="Enter State" class="input-2"/>
                            <input name="zipcode" type="text" placeholder="Enter Zipcode" class="input-2" />
                        </div>
                    </div>
                    <button type="submit" value="submit" class="bttn">Sign Up</button>
                </fieldset>
            </form>
        </div>
    )
}

export default AdBuilder
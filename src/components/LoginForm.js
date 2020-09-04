import React, { useEffect } from "react"
import useFetch from '../hooks/useFetch'
import { Link, Redirect } from "react-router-dom";

function LoginForm({onLogIn,user}) {
    
    const [loading,error,data,fetchData] = useFetch('/login','POST')

    //how did passing the data argument into the onLogin function even work?
    useEffect(()=>{
        if(data){
            onLogIn(data)
        }
    },[data,onLogIn])

    const submitForm = (event) => {
        event.preventDefault()
        //json form values
        fetchData(JSON.stringify({username:event.target[0].childNodes[1].value,password:event.target[0].childNodes[2].value}))
    }

    console.log(data)

    return(
        <div className="login-form-container">
        {user ? <Redirect to="/UserProfile" /> : null} 
        <div className="lr-container">
            <div className="main-content">
                <form onSubmit={submitForm}>
                    <fieldset>
                        <legend className="logintext">Login</legend>
                        <input name="username" type="text" placeholder="Enter Username" className="input-1" />
                        <input name="password" type="password" placeholder="Enter Password" className="input-2"/>
                        <br />
                        <button className="bttn">Submit</button>
                    </fieldset>
                    New?<Link to="/RegisterForm"> <span className="green bold">Register Here!</span></Link>
                </form>
                </div>
            <div className="lr-link">
                <div className="s-part">
                    
                </div>
            </div>
        </div>
        
        </div>
    )
}

export default LoginForm
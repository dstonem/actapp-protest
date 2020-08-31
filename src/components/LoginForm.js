import React, { useEffect } from "react"
import useFetch from '../hooks/useFetch'
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

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
        console.log(event.target[0].childNodes[1].value)
        console.log(event.target[0].childNodes[2].value)
        //json form values
        fetchData(JSON.stringify({username:event.target[0].childNodes[1].value,password:event.target[0].childNodes[2].value}))
    }

    console.log(data)

    return(
        <HashRouter>
        {user ? <NavLink to="/UserProfile"><button className="margin-top">Go to Profile</button></NavLink> :
        <div className="lr-container">
            <div className="main-content">
                <div className="header">
                    <h1><span className="green">act</span>app<span className="white-on-black">protest</span></h1>
                </div>
                <form onSubmit={submitForm}>
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
                    New?<NavLink to="/RegisterForm"> Register Here!</NavLink>
                </div>
            </div>
        </div>
        }   
        </HashRouter>
    )
}

export default LoginForm
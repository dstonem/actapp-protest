import React, { useState } from "react"
import useFetch from '../hooks/useFetch'
import {Redirect} from 'react-router'

function Survey() {

    const [loading,error,data,fetchData,setUrl] = useFetch('/login/survey','POST')

    const [submitted,setSubmitted] = useState(false)

    const submitForm  = (event) => {
        event.preventDefault()
        console.log(event.target[0].value)
        console.log(event.target[1].value)
        console.log(event.target[2].value)
        //json form values
        fetchData(JSON.stringify({cause1:event.target[0].value,cause2:event.target[1].value,cause3:event.target[2].value}))
        setSubmitted(true)
    }

    return (
        <div className="survey-main-content">
            <form onSubmit={submitForm}>
                {submitted ? <Redirect to="/UserProfile" /> : null} 
                <div>
                    <h2 className="registertext">Pick up to Three Causes to Support</h2>
                </div>
                <div>
                    <label htmlFor="causes" className="cause">Cause 1:</label>
                        <select id="dropdown" name="cause1" className="input-1">
                            <option value="">Select your option</option>
                            <option value="blm">Black Lives Matter</option>
                            <option value="election">Upcoming Election</option>
                            <option value="climate">Climate Change</option>
                            <option value="youth">Youth Development Services</option>
                        </select>
                    <label htmlFor="causes" className="cause">Cause 2:</label>
                        <select id="dropdown" name="cause2" className="input-1">
                            <option value="">Select your option</option>
                            <option value="blm">Black Lives Matter</option>
                            <option value="election">Upcoming Election</option>
                            <option value="climate">Climate Change</option>
                            <option value="youth">Youth Development Services</option>
                        </select>
                    <label htmlFor="causes" className="cause">Cause 3:</label>
                        <select id="dropdown" name="cause3" className="input-1">
                            <option value="">Select your option</option>
                            <option value="blm">Black Lives Matter</option>
                            <option value="election">Upcoming Election</option>
                            <option value="climate">Climate Change</option>
                            <option value="youth">Youth Development Services</option>
                        </select>
                </div>
                <div className="s-part">
                    <button type="submit" value="submit" className="bttn">Submit</button>
                </div>
            </form>  
        </div>   
    )
}

export default Survey
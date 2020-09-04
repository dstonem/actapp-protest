import React, {useState, useEffect} from "react"
import Event from "./Event"
import { Link, Redirect } from "react-router-dom";
import useFetch from "../hooks/useFetch"
import { apiKey } from "../config"
import PolicyCreator from "./PolicyCreator"
import BlmActionsDropdowns from "./actions/BlmActionsDropdown"
import EnvActionsDropdowns from "./actions/EnvActionsDropdown"
import PolActionsDropdowns from "./actions/PolActionsDropdown"
import useDropdown from "../hooks/useDropdown"
import DatePicker from 'react-date-picker'
// import DayPickerInput from 'react-day-picker/DayPickerInput'
import "react-day-picker/lib/style.css";

function EventCreator({user}) {

    var x = 30; //minutes interval
    var times = []; // time array
    var tt = 0; // start time
    var ap = ['AM', 'PM']; // AM-PM

    //loop to increment the time and push results in array
    for (var i=0;tt<24*60; i++) {
    var hh = Math.floor(tt/60); // getting hours of day in 0-24 format
    var mm = (tt%60); // getting minutes of the hour in 0-55 format
    times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh/12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
    tt = tt + x;
    }

console.log(times);
    console.log(user)

    const [loading,error,data,fetchData] = useFetch('/events/create','POST')

    const [formData,setFormData] = useState({})

    const handleChange = (event) => {
        event.preventDefault()
        const { name, value, type, checked } = event.target
        setFormData(formData => ({...formData, [name]: value}));
        if(formData.cause === 'blm') formData.pic = "/images/icons/blm_icon.png"
        if(formData.cause === 'climate') formData.pic = "/images/icons/environment_icon.png"
        if(formData.cause === 'election') formData.pic = "/images/icons/election_icon.png"
    }

    const [submitted,setSubmitted] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        fetchData(JSON.stringify(formData))
        setSubmitted(true)
    }
                    
    const [startTime, StartTimeDropdown ] = useDropdown("Start Time: ","startTime", "12:00PM", times);
    const [endTime, EndTimeDropdown ] = useDropdown("End Time: ","endTime", "1:00PM", times);
    
    const [date, setDate] = useState(new Date());

    const logChange = e => {
        setFormData(formData => ({...formData, date:e}))
        console.log(e)
    }

    // let eventPreview = <Event event={formData} />
    let address = <input type="text" name="address" id="pac-input" placeholder="Address" ></input>
    return (
        <div className="event-creator">
            {submitted ? <Redirect to="/UserProfile" /> :
            <>
            <h2 id="event-creator-header">Start Some <span className="green">Good Trouble</span></h2>
            {/* {!user ? <Link to="/LoginForm"><button>Log In</button></Link> 
            :  */}
            <div>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <fieldset>
                    <legend className="registertext">Event Details</legend>
                    <div className="input-wrapper">
                        <select id="dropdown" name="cause" className="input-1">
                            <option value="">Cause:</option>
                            <option value="blm">Black Lives Matter</option>
                            <option value="election">Upcoming Election</option>
                            <option value="climate">Climate Change</option>
                        </select>
                        <input type="text" name="title" placeholder="Title of Event"></input>
                        <input type="text" name="description" placeholder="Description"></input>
                        {/* activities input */}
                        <input type="text" name="location" id="pac-input" placeholder="Address" ></input>
                        {/* <TimeKeeper 
                            time={startTime}
                        /> */}
                        <div className="time-date-container">
                        <StartTimeDropdown />    
                        <EndTimeDropdown />    
                        
                        <DatePicker 
                            selected={date}
                            name="date"
                            dateFormat="mm/dd/yyyy"
                            autocomplete="on"
                            onChange={logChange}
                        />
                        </div>
                        {/* <DayPickerInput name="date" onClick={logChange}/> */}
                        {/* <Calendar format='DD/MM/YYYY' date='11-02-2020' /> */}
                        {/* <input type="text" name="startTime" placeholder="Start Time"></input> */}
                        {/* <input type="text" name="endTime" placeholder="End Time"></input> */}
                        {/* <input type="text" name="date" placeholder="Date"></input> */}
                    </div>
                </fieldset>
                <h2 id="event-creator-header">Make It <span className="green">Data-Driven</span></h2>                
                <fieldset>
                    {/* when the user clicks the little question mark they get a div with info about how the attendees can vote and forum on the policies proposed, then it tracks that data as well as the data on follopwup action completion */}
                    <legend className="registertext">Follow-Up Actions (?)</legend>
                    <div className="input-wrapper">
                        {formData.cause === 'blm' ? <BlmActionsDropdowns /> : null}
                        {formData.cause === 'climate' ? <EnvActionsDropdowns /> : null}
                        {formData.cause === 'election' ? <PolActionsDropdowns /> : null}
                    </div>
                </fieldset>
                <button type="submit">Submit</button>
            </form>

                {/* {eventPreview} */}
            </div>
            
            </>}
        </div>
    )
}

export default EventCreator

/*// let googleData = useFetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressVal}&key=${key}`)
    // console.log(googleData)
    // fetch(url,callback)
    // .then(response => response.json())
    // .then(data => {
    //     // console.log(data.results[0].formatted_address);
    //     console.log(data.results[0].address_components[1].long_name)
    //     console.log(data.results[0].address_components[2].short_name)
    //     callback(data.results[0].address_components[1].long_name,data.results[0].address_components[2].short_name)
    // })
    // .catch(err => console.warn(err.message))
    
    //center needs to take the address and generate a lat and lng to put a location pin on the map
    //now instead of each indivual property it serves event like 'props' */
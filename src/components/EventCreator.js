import React, {useState, useEffect} from "react"
import Event from "./Event"

import useFetch from "../hooks/useFetch"
import { apiKey } from "../config"
import PolicyCreator from "./PolicyCreator"
import BlmActionsDropdowns from "./actions/BlmActionsDropdown"
import EnvActionsDropdowns from "./actions/EnvActionsDropdown"
import PolActionsDropdowns from "./actions/PolActionsDropdown"

import Timekeeper from 'react-timekeeper';

function EventCreator() {
    
    // useFetch('https://maps.googleapis.com/maps/api/js?key='+apiKey+'&libraries=places')
    // console.log('https://maps.googleapis.com/maps/api/js?key='+apiKey+'&libraries=places')

    const [loading,error,data,fetchData] = useFetch('/events/create','POST')

    const [formData,setFormData] = useState({})

    const handleChange = (event) => {
        event.preventDefault()
        const { name, value, type, checked } = event.target
        setFormData(formData => ({...formData, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(formData.cause === 'blm') formData.pic = "fist.jpg"
        if(formData.cause === 'climate') formData.pic = "fire.jpg"
        if(formData.cause === 'election') formData.pic = "IMG_5011.JPG"

        console.log(formData)
        fetchData(JSON.stringify(formData))
    }

    const [startTime,setStartTime] = useState("01:00")
    const [endTime,setEndTime] = useState("02:00")
    
    const key = "AIzaSyA-FD7UmxJXC2NjReClIbSv-BFjfELmqN4";
    let addressVal = formData.address
    console.log(addressVal)
    // let googleData = useFetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressVal}&key=${key}`)
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
    //now instead of each indivual property it serves event like 'props'
    let eventPreview = <Event event={formData} />
    let address = <input type="text" name="address" id="pac-input" placeholder="Address" ></input>
    return (
        <div className="event-creator">
            <h2 id="event-creator-header">Start Some <span className="green">Good Trouble</span></h2>
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
                        <input type="text" name="description" placeholder="In ten words or less..."></input>
                        {address}
                        {/* <TimeKeeper 
                            time={startTime}
                        /> */}
                        <input type="text" name="startTime" placeholder="Start Time"></input>
                        <input type="text" name="endTime" placeholder="End Time"></input>
                        <input type="text" name="date" placeholder="Date"></input>
                    </div>
                </fieldset>
                {/* when the user clicks the little question mark they get a div with info about how the attendees can vote and forum on the policies proposed, then it tracks that data as well as the data on follopwup action completion */}
                <h2 id="event-creator-header">Make It <span className="green">Data-Driven</span></h2>
                
                    {/* Make this its own form that comes after the events details section
                        --store the event_id in state so it can be passed to the policy form
                    */}
                    {/* <PolicyCreator formData={formData} handleChange={handleChange}/> */}
                
                <fieldset>
                    <legend className="registertext">Follow-Up Actions (?)</legend>
                    <div className="input-wrapper">
                        {formData.cause === 'blm' ? <BlmActionsDropdowns /> : null}
                        {formData.cause === 'climate' ? <EnvActionsDropdowns /> : null}
                        {formData.cause === 'election' ? <PolActionsDropdowns /> : null}
                    </div>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
            {eventPreview}
        </div>
    )
}

export default EventCreator
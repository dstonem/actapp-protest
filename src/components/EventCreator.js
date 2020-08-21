import React, {useState, useEffect} from "react"
import Event from "./Event"

import useFetch from "../hooks/useFetch"
import { apiKey } from "../config"

function EventCreator() {
    
    // useFetch('https://maps.googleapis.com/maps/api/js?key='+apiKey+'&libraries=places')
    // console.log('https://maps.googleapis.com/maps/api/js?key='+apiKey+'&libraries=places')

    const [formData,setFormData] = useState({})

    const handleChange = (event) => {
        event.preventDefault()
        const { name, value, type, checked } = event.target
        setFormData(formData => ({...formData, [name]: value}));
    }

    
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
    let eventPreview = <Event title={formData.title} description={formData.description} address={formData.address} starttime={formData.startTime} endtime={formData.endTime} date={formData.date} />
    let address = <input type="text" name="address" id="pac-input" placeholder="Address" ></input>
// HAVE AN <Event /> COMPONENT DISPLAY WHAT THE USER TYPES IN SO THEY GET A LIVE PREVIEW OF THEIR EVENT LOOKS LIKE
    return (
        <div>
            <form onChange={handleChange}>
                <input type="text" name="title" placeholder="Title of Event"></input>
                <input type="text" name="description" placeholder="In ten words or less..."></input>
                {address}
                <input type="text" name="startTime" placeholder="Start Time"></input>
                <input type="text" name="endTime" placeholder="End Time"></input>
                <input type="text" name="date" placeholder="Date"></input>
                <button type="submit">Submit</button>
            </form>
            {eventPreview}
        </div>
    )
}

export default EventCreator
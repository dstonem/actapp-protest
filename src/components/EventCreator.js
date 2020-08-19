import React, {useState} from "react"
import Event from "./Event"

function EventCreator() {
    
    const [formData,setFormData] = useState({})

    const handleChange = (event) => {
        event.preventDefault()
        const { name, value, type, checked } = event.target
        setFormData(formData => ({...formData, [name]: value}));
        // if(type === "checkbox"){
        //   console.log(formData)
        // }
        // if(type === "checkbox" && checked === false){
        //     console.log(formData)
        // }
        console.log(formData)
    }
    //center needs to take the address and generate a lat and lng to put a location pin on the map
    let eventPreview = <Event title={formData.title} description={formData.description} address={formData.address} starttime={formData.startTime} endtime={formData.endTime} date={formData.date} />

// HAVE AN <Event /> COMPONENT DISPLAY WHAT THE USER TYPES IN SO THEY GET A LIVE PREVIEW OF THEIR EVENT LOOKS LIKE
    return (
        <div>
            <form onChange={handleChange}>
                <input type="text" name="title" placeholder="Title of Event"></input>
                <input type="text" name="description" placeholder="In ten words or less..."></input>
                <input type="text" name="address" placeholder="Address/Location"></input>
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
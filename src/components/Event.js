import React,{useState,useEffect} from "react"
import Attendees from './Attendees'
import {
    Link,
    Redirect
  } from "react-router-dom";
// import {addAttend,attendance,userAttending} from './Attendees'

function Event({user,id,setUser,event:
        {
            pic,
            cause,
            title,
            starttime,
            endtime,
            date,
            action1
        }
    }) {
    
    let [eventId,setEventId] = useState(id)

    const showEventDetails = (evt) => {
        setEventId(evt.target.id)
        console.log(eventId)
        // window.location = `/#/events/${eventId}`
        //this is not very react-y but it works
        // return (
        //     <Redirect 
        //       to={`/events/${eventId}`}
        //     />
        // )
    }

    return (
        <div className="event-card">
            <div className="event-img-container">
                <img src={pic} className="event-img" />
            </div>

            <div className="event-card-title-container">
                <h2>{title}</h2>
                <Link to={`/events/${eventId}`}>
                    <button id={id} onClick={showEventDetails}>Learn More & Attend</button>
                </Link>
            </div>
    
            <div className="event-info-container">
                <div className="event-info-text-container">
                    {/* <p>{address}</p> */}
                    <p>{starttime} - {endtime}</p>
                    <p>{date}</p>
                    <div>{cause}</div>
                </div>
            </div>
            <div className='map-container'>
                <h3>Featured Followup Action</h3>
                {action1}
            </div>

        </div>
    )
}

export default Event
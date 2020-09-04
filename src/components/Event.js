import React,{useState,useEffect} from "react"
import Attendees from './Attendees'
import {
    Link,
    Redirect
  } from "react-router-dom";
// import {addAttend,attendance,userAttending} from './Attendees'

function Event({user,id,setUser,starttime,date,event:
        {
            pic,
            cause,
            title,
            endtime,
            action1
        }
    }) {
    
    let [eventId,setEventId] = useState(id)

    console.log(starttime,date)

    return (
        <Link to={`/events/${eventId}`}>
            <div className="event-card">
                <div className="event-img-container">
                    <img src={pic} className="event-img" />
                </div>

                <div className="event-card-title-container">
                    <p className="green bold">{date}</p>
                    <p className="green bold">{starttime}</p>
                    <h2>{title}</h2>
                </div>

            </div>
        </Link>
    )
}

export default Event
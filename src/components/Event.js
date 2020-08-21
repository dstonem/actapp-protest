import React, {useState} from "react"
import GMap from "./Map"
import EventDetails from "./EventDetails"

function Event({title,img,description,imgSrc,starttime,endtime,date,center,address,lat,lng,attendees}) {
    //move these hooks into another file -- look at todoPlus and ask Clint how to do that the right way
    const [signedIn,setSignedIn] = useState(true)
    
    //move these styles to the css file
    const style = {
        background:"linear-gradient(to bottom, #eee, #ABAEB3)",
        backgroundRepeat:"no-repeat",
        backgroundSize:"50%",
        // backgroundZoom:"200%"
    }

    const mapStyles = {
        width:"150px",
        height:"150px",
        borderRadius:"50%",
        marginLeft:"15px"
    }

    const [attendance,setAttendance] = useState(0)//change the zero to whatever the count(*) of this event is in the DB
    const [userAttending,setUserAttending] = useState(false)

    const addAttend = () => {
        if(!signedIn){/* route to login */console.log('you must log in')} 
        else if(/* signedIn && there is no row with the user_id and the event_id */ !userAttending) {
            setUserAttending(true)
            setAttendance(attendance + 1)
        } else {
            setUserAttending(false)
            setAttendance(attendance - 1)
            console.log('you are already attending')
        }
        //really this would be to add a row with the user_id and the event_id to the "attendees" table in SQL
        
        //another function adds the event to the user's homescreen -- after the event, the followup action is added to the user's homescreen as well
    }

    const [details,setDetails] = useState(false)

    const showEventDetails = () => {
        setDetails(!details)
    }
    
    return (
        details ? <EventDetails handleClick={showEventDetails} addAttend={addAttend} attendance={attendance} userAttending={userAttending} img={img} title={title}/> :
        <div className="event-card" style={style}>
            <div className="event-img-container">
                <img src={img} className="event-img" />
            </div>

            <div className="event-card-title-container">
                <h2>{title}</h2>
                <button onClick={showEventDetails}>Learn More & Attend</button>
            </div>
    
            <div className="event-info-container">
                <div className="event-info-text-container">
                    {/* <p>{address}</p> */}
                    <p>{starttime} - {endtime}</p>
                    <p>{date}</p>
                </div>
            </div>
            <div className="map-container">
                <GMap 
                        initialCenter={center}
                        styles={mapStyles}
                        lat={lat}
                        lng={lng}
                />
            </div>
            
        </div>
    )
}

export default Event
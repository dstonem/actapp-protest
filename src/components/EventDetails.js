import React from "react"
import useShowDeets from "../hooks/useShowDeets"

function EventDetails({handleClick,addAttend,attendance,userAttending,title,img}) {

    return(
        <div className="event-details-page-container">
            <div className="event-img-container">
                <img src={img} className="event-img" />
            </div>

            <div className="event-card-title-container">
                <h2>{title}</h2>
            </div>
            <h2>Attendance: {attendance}</h2>
            <div className="event-details-button-div">
                <button onClick={handleClick}>Back to Events</button>
                <button onClick={addAttend}>{userAttending ? <span className="green">Attending</span> : 'Attend & Support'}</button>
            </div>
        </div>
    )
}

export default EventDetails
import React,{useState} from "react"
import Policy from "./Policy"
import GMap from "./Map"

function EventDetails({handleClick,addAttend,attendance,userAttending,title,img,description,policies,center,mapStyles,lat,lng}) {

    return(
        <div className="event-details-page-container">
            <div className="event-details-header">
                <div className="event-img-container">
                    <img src={img} className="event-img" />
                </div>
                <div className="map-container-details">
                    <GMap 
                            initialCenter={center}
                            styles={mapStyles}
                            lat={lat}
                            lng={lng}
                    />
                </div>
            </div>
                <h2>{title}</h2>
                <p>{description}</p>
                <h3>Policies Supporting:</h3>
                <ul>
                    {policies.map((policy,idx) => {
                        return(
                            <li>
                                <Policy key={idx} title={policy.title} description={policy.description} />
                            </li>
                        )
                    })}
                    
                </ul>
            
            <h2>Attendance: {attendance >= 50 ? attendance : "<50"}</h2> 
            <div className="event-details-button-div">
                <button onClick={handleClick}>Back to Events</button>
                <button onClick={addAttend}>{userAttending ? <span className="green">Attending</span> : 'Attend & Support'}</button>
            </div>
        </div>
    )
}

export default EventDetails
import React,{useState} from "react"
import Policy from "./Policy"
import GMap from "./Map"
import EventPageFeed from './EventPageFeed'
import {eventData} from '../eventData'
import Post from './posts/Post'

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
            <EventPageFeed>
                {/* except this would be mapping the return of the select * from posts where event_id = __ (need to include the post_id somewhere in this component, then change the props of Post) */}
                {eventData.map(event => <Post username={event.userName} img={event.img} text={event.description}/>)}
            </EventPageFeed>
            <div className="event-details-button-div">
                <button onClick={handleClick}>Back to Events</button>
                <button onClick={addAttend}>{userAttending ? <span className="green">Attending</span> : 'Attend & Support'}</button>
            </div>
        </div>
    )
}

export default EventDetails
import React,{useState,useEffect} from "react"
import useFetch from '../hooks/useFetch'
import Policy from "./Policy"
import GMap from "./Map"
import EventPageFeed from './EventPageFeed'
import Attendees from './Attendees'
import Header from './Header'
import {eventData} from '../eventData'
import Post from './posts/Post'
import Actions from './Actions'
import {
    Route,
    NavLink,
    HashRouter,
    Redirect
  } from "react-router-dom";
import {useParams} from 'react-router'

function EventDetails({user,setUser,userInfo,handleClick}) {

    const id=useParams()
    console.log(id.event_id)

    // const [whichEvent,setWhichEvent] = useState(id)
    // const [eventData,setEvent]

    const [loading,error,data,fetchData,setUrl] = useFetch(`/events/${id.event_id}`)
  
    useEffect(()=>{
        if(!data){
            fetchData()
        }
    },[id.event_id])

    if(!data) return <div>loading...</div>

    return(
        <div>
            <Header />
        <div className="event-details-page-container">
            <div className="event-details-header">
                <div className="event-img-container">
                    <img src={data.pic} className="event-img" />
                </div>
                {/* <div className="map-container-details">
                    <GMap 
                            initialCenter={center}
                            styles={mapStyles}
                            lat={lat}
                            lng={lng}
                    />
                </div> */}
            </div>
                <h2>{data.title}</h2>
                <p>{data.description}</p>

                <h3>Time: {data.starttime} - {data.endtime}</h3>
                <p>Date: {data.eventdate}</p>
                <p>Address: {data.location}</p>

                <Actions action1={data.action1} action2={data.action2} action3={data.action3}/>
            <EventPageFeed event_id={id.event_id}/>
                
            <Attendees user={user} id={data.id} setUser={setUser}/>
            
            
        </div>
        </div>
    )
}

export default EventDetails

/* 

 : <div><button onClick={handleClick}>Back to Events</button><NavLink to="/LoginForm"><button>Login to Attend</button></NavLink></div>}

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

*/
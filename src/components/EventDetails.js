import React,{useState,useEffect} from "react"
import useFetch from '../hooks/useFetch'
import Policy from "./Policy"
import GMap from "./Map"
import EventPageFeed from './EventPageFeed'
import Attendees from './Attendees'
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

function EventDetails({user,setUser,id,handleClick,startTime,endTime,address,addAttend,attendance,userAttending,title,img,description,date,action1,action2,action3}) {

    const [loading,error,data,fetchData,setUrl] = useFetch('/posts')
  
    useEffect(()=>{
        if(!data){
        fetchData()
        }
    },[])

    // let {id}=useParams()
    console.log(id)

    
    
    if(!data) return <div>loading...</div>

    return(
        <HashRouter>
        <div className="event-details-page-container">
            <div className="event-details-header">
                <div className="event-img-container">
                    <img src={img} className="event-img" />
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
                <h2>{title}</h2>
                <p>{description}</p>

                <h3>Time: {startTime} - {endTime}</h3>
                <p>Date: {date}</p>
                <p>Address: {address}</p>

                <Actions action1={action1} action2={action2} action3={action3}/>
                
            
            <EventPageFeed>
                {/* except this would be mapping the return of the select * from posts where event_id = __ (need to include the post_id somewhere in this component, then change the props of Post) */}
                {data.map((post,idx) => <Post key={idx} user={post.userName} postImg={post.picurl} postText={post.body} causes={post.causes} action={post.action} />)}
            </EventPageFeed>
            {user ? <Attendees handleClick={handleClick} user={user} id={id} setUser={setUser}/> : <NavLink to="/LoginForm"><button onClick={handleClick}>Back to Events</button><button>Login to Attend</button></NavLink>}
            
            
        </div>
        </HashRouter>
    )
}

export default EventDetails

/* 

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
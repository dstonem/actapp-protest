import React,{useState,useEffect} from "react"
import {
    Route,
    NavLink,
    HashRouter,
    Redirect
  } from "react-router-dom";
import {useParams} from 'react-router'
import useFetch from '../hooks/useFetch'
import GMap from "./Map"
import EventDetails from "./EventDetails"
import ProtectedRoute from './ProtectedRoute'
// import {addAttend,attendance,userAttending} from './Attendees'

function Event({user,id,setUser,event:
        {
            pic,
            cause,
            title,
            description,
            starttime,
            endtime,
            date,
            center,
            address,
            lat,
            lng,
            attendees,
            action1,
            action2,
            action3
        }
    }) {
    const img = pic
    const [loading,error,data,fetchData,setUrl] = useFetch('/policies')
  
    useEffect(()=>{
        if(!data){
        fetchData()
        }
    },[])
    
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
    
    const [details,setDetails] = useState(false)
    let [eventId,setEventId] = useState(id) 

    const showEventDetails = (evt) => {
        setDetails(!details)
        setEventId(id)
        console.log(eventId)
    }
    console.log(id)
    
       
    let eventDetails =<Redirect to='/events/:id'><EventDetails handleClick={showEventDetails} id={id} user={user} date={date} setUser={setUser} img={img} title={title} description={description} policies={data} center={center} lat={lat} lng={lng} mapStyles={mapStyles}/></Redirect> 

    if(!data) return <div>loading...</div>
    //is this the right place to put match.params? yes i think so
    return (
        <HashRouter>
            {/* could change the line below to pass STATE through react routers as props below like the useLocation() example on this webpage: https://dev.to/finallynero/hooks-introduced-in-react-router-v5-1-7g8 */}
        <ProtectedRoute path = '/events/:id' id={eventId} loggedIn={user} user={user} component={EventDetails}></ProtectedRoute>
        
        {details ? <EventDetails handleClick={showEventDetails} id={eventId} user={user} setUser={setUser} img={img} title={title} address={address} description={description} date={date} action1={action1} action2={action2} action3={action3} center={center} lat={lat} lng={lng} mapStyles={mapStyles}/>
        :
        <div className="event-card" style={style}>
            <div className="event-img-container">
                <img src={img} className="event-img" />
            </div>

            <div className="event-card-title-container">
                <h2>{title}</h2>
                {/* <NavLink to='/events/:id'> */}
                    <button onClick={showEventDetails}>Learn More & Attend</button>
                {/* </NavLink> */}
            </div>
    
            <div className="event-info-container">
                <div className="event-info-text-container">
                    {/* <p>{address}</p> */}
                    <p>{starttime} - {endtime}</p>
                    <p>{date}</p>
                </div>
            </div>
            <div>{cause}</div>
            {/* <div className="map-container">
                <GMap 
                        initialCenter={center}
                        styles={mapStyles}
                        lat={lat}
                        lng={lng}
                />
            </div> */}
            
        </div>}
        </HashRouter>
    )
}

export default Event
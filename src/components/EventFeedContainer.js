import React, {useEffect} from 'react'
import useFetch from '../hooks/useFetch'
import EventFeed from './EventFeed'
import Event from './Event'
import EventDetails from './EventDetails'
import ProtectedRoute from './ProtectedRoute'

function EventFeedContainer({user,setUser}) {

    const [loading,error,data,fetchData,setUrl] = useFetch('/events')
  
    useEffect(()=>{
        if(!data){
        fetchData()
        }
    },[])

    if(!data) return <div>loading...</div>
    //add a filter to the .map below to filter based on the users' causes
    return (
        <EventFeed>
            {data.map((event,idx) => <Event user={user} id={idx+1} setUser={setUser} key={idx} img={event.pic} title={event.title} description={event.description} cause={event.cause} starttime={event.starttime} endtime={event.endtime} date={event.eventDate} center={event.location} address={event.address} lat={event.location.lat} lng={event.location.lng} />)}
        </EventFeed>
    )
}

export default EventFeedContainer
import React, {useEffect} from 'react'
import useFetch from '../hooks/useFetch'
import EventFeed from './EventFeed'
import Event from './Event'
import EventDetails from './EventDetails'
import ProtectedRoute from './ProtectedRoute'

function EventFeedContainer({user,setUser,userInfo}) {

    const [loading,error,data,fetchData,setUrl] = useFetch('/events')
  
    useEffect(()=>{
        if(!data){
        fetchData()
        }
    },[])

    const filterByCause = (item) => {
        if(item.cause === userInfo.cause_one || item.cause === userInfo.cause_two || item.cause === userInfo.cause_three){
            console.log(item.cause,userInfo)
            return true
        }
    }

    if(!data) return <div>loading...</div>
    //add a filter to the .map below to filter based on the users' causes
    console.log(user,data,userInfo,'20')
    return (
        <EventFeed>
            {user ? data.filter(filterByCause).map((event,idx) => <Event user={user} id={idx+1} setUser={setUser} key={idx} event={event} />) : data.map((event,idx) => <Event user={user} id={idx+1} setUser={setUser} key={idx} event={event} />)} 
        </EventFeed>
    )
}
//event={event} above passes all of the props below, but with fewer opportunities for bugs
//img={event.pic} title={event.title} description={event.description} cause={event.cause} starttime={event.starttime} endtime={event.endtime} date={event.eventDate} center={event.location} address={event.address} lat={event.location.lat} lng={event.location.lng}

export default EventFeedContainer
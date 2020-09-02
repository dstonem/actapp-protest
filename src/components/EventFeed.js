import React, {useEffect} from 'react'
import useFetch from '../hooks/useFetch'
import Event from './Event'

function EventFeedContainer({user,setUser,userInfo}) {

    const [loading,error,data,fetchData,setUrl] = useFetch('/events')
  
    useEffect(()=>{
        if(!data){
            fetchData()
        }
    },[])

    const filterByCause = (item) => {
        if(item.cause === userInfo.cause_one || item.cause === userInfo.cause_two || item.cause === userInfo.cause_three){
            return true
        }
    }

    if(!data) return <div>loading...</div>

    return (
        <div className="event-feed">
            {user ? data.filter(filterByCause).map((event,idx) => <Event user={user} id={event.id} setUser={setUser} key={idx} event={event} />) : data.map((event,idx) => <Event user={user} id={idx+1} setUser={setUser} key={idx} event={event} />)} 
        </div>
    )
}
//event={event} above passes all of the props below, but with fewer opportunities for bugs
//img={event.pic} title={event.title} description={event.description} cause={event.cause} starttime={event.starttime} endtime={event.endtime} date={event.eventDate} center={event.location} address={event.address} lat={event.location.lat} lng={event.location.lng}

export default EventFeedContainer
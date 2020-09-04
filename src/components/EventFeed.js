import React, {useEffect} from 'react'
import useFetch from '../hooks/useFetch'
import Event from './Event'

function EventFeedContainer({user,setUser,userInfo}) {

    const [loading,error,data,fetchData,setUrl] = useFetch('/events')
  
    useEffect(()=>{
        if(!data){
            fetchData()
        }
    },[userInfo])

    const filterByCause = (item) => {
        if(!userInfo.cause_one && !userInfo.cause_two && !userInfo.cause_three) {
            return true
        }
        if(item.cause === userInfo.cause_one || item.cause === userInfo.cause_two || item.cause === userInfo.cause_three){
            return true
        }
    }

    if(!data) return <div>loading...</div>

    let startTime
    let readableDate
    let startTimes = []
    let readableDates = []

    for(let i = 0; i < data.length; i++) {
        readableDate = new Date(`${data[i].eventdate}`).toDateString()
        readableDates.push(readableDate)
        console.log(readableDates)
        //I could turn this logic into a custom hook at some point (for employers/a tutorial on medium)

        startTime = data[i].starttime
        console.log(data[i].starttime[0])
        if(data[i].starttime[0] == 0) {
            startTime = `${data[i].starttime.slice(1,5)} AM`
            console.log(startTime)
        } else {
            startTime = `${data[i].starttime.slice(0,5)} AM`
        }

        if(Number(data[i].starttime.slice(0,2)) > 12) {
            let startHour = startTime.slice(0,2)
            let startMinutes = data[i].starttime.slice(2,5)
            
            startHour = Number(data[i].starttime.slice(0,2))-12

            startTime = `${startHour}${startMinutes} PM`
            console.log(startTime)
        }
        startTimes.push(startTime)
        console.log(startTimes[i])

    }

    return (
        <div className="event-feed">
            {user ? data.filter(filterByCause).map((event,idx) => <Event user={user} id={event.id} setUser={setUser} key={idx} event={event} starttime={startTimes[idx]} date={readableDates[idx]} />).sort((a,b)=>b.date - a.date) : data.map((event,idx) => <Event user={user} id={idx+1} setUser={setUser} key={idx} event={event} starttime={startTimes[idx]} date={readableDates[idx]} />).sort((a,b)=>b.date - a.date)} 
        </div>
    )
}
//event={event} above passes all of the props below, but with fewer opportunities for bugs
//img={event.pic} title={event.title} description={event.description} cause={event.cause} starttime={event.starttime} endtime={event.endtime} date={event.eventDate} center={event.location} address={event.address} lat={event.location.lat} lng={event.location.lng}

export default EventFeedContainer
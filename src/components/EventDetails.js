import React, { useState, useEffect } from "react"
import useFetch from '../hooks/useFetch'
import Policy from "./Policy"
import GMap from "./Map"
import EventPageFeed from './EventPageFeed'
import Attendees from './Attendees'
import Header from './Header'
import Nav from './Nav'
import Actions from './Actions'
import { useParams } from 'react-router'

function EventDetails({ user, setUser, userInfo, handleClick }) {

    const id = useParams()
    console.log(id.event_id)

    const [loading, error, data, fetchData, setUrl] = useFetch(`/events/${id.event_id}`)

    useEffect(() => {
        if (!data) {
            fetchData()
        }
    }, [id.event_id])

    if (!data) return <div>loading...</div>

    const readableDate = new Date(`${data.eventdate}`).toDateString()
    console.log(readableDate)
    //I could turn this logic into a custom hook at some point (for employers/a tutorial on medium)
    let startTime = data.starttime
    console.log(data.starttime[0])
    if (data.starttime[0] == 0) {
        startTime = `${data.starttime.slice(1, 5)} AM`
        console.log(startTime)
    } else {
        startTime = `${data.starttime.slice(0, 5)} AM`
    }

    if (Number(data.starttime.slice(0, 2)) > 12) {
        let startHour = startTime.slice(0, 2)
        let startMinutes = data.starttime.slice(2, 5)

        startHour = Number(data.starttime.slice(0, 2)) - 12

        startTime = `${startHour}${startMinutes} PM`
        console.log(startTime)
    }

    let endTime = data.endtime
    if (data.endtime[0] == 0) {
        endTime = `${data.endtime.slice(1, 5)} AM`
    } else {
        endTime = `${data.endtime.slice(0, 5)} AM`
    }

    if (Number(data.endtime.slice(0, 2)) > 12) {
        let endHour = endTime.slice(0, 2)
        let endMinutes = data.endtime.slice(2, 5)

        endHour = Number(data.endtime.slice(0, 2)) - 12

        endTime = `${endHour}${endMinutes} PM`
        console.log(endTime)
    }

    return (
        <div>
            <Header />
            <div className="event-details-page-container">
                <div className="event-details-title-container">
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </div>
                <hr/>
                <div className="event-details-bridge">
                    
                    <div className="event-img-container-details">
                        <img src={data.pic} className="event-img" />
                    </div>
                    <div className="event-details-when-where">
                        <p className="green bold bigger">{readableDate}</p>
                        <p className="green bold">{startTime}-{endTime}</p>
                        <p className="bold">{data.location}</p>
                    </div>
                    <hr/>
                </div>
                <hr id="line" />
                <div className="event-details-main-container">
                    <Actions action1={data.action1} action2={data.action2} action3={data.action3} userInfo={userInfo} />
                    <EventPageFeed user={user} event_id={id.event_id} userInfo={userInfo} />
                    <Attendees user={user} id={data.id} setUser={setUser} />
                </div>
            </div>
            <Nav />
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
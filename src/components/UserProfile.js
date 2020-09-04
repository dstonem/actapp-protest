import React, { useState, useEffect } from "react"
import useFetch from '../hooks/useFetch'
import UserInfo from './UserInfo'
import UsersEventsList from './UsersEventsList'
import UsersPosts from './UsersPosts'
import {
    Route,
    Link,
    HashRouter,
    Redirect
} from "react-router-dom";

const UserProfile = ({ user, userInfo }) => {

    const [loading, error, data, fetchData, setUrl] = useFetch('/usersEvents')

    useEffect(() => {
        if (!data && user) {
            fetchData()
        }
    }, [])

    console.log(data, 'userprofile')

    const [events, setEvents] = useState('events')

    const toggleShowing = () => {
        setEvents(!events)
    }

    if (!data) return <div>loading...</div>

    let startTime
    let readableDate

    for(let i = 0; i < data.length; i++) {
        readableDate = new Date(`${data[i].eventdate}`).toDateString()
        console.log(readableDate)
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
    }
    

    return (
        <div className="user-profile">
            <UserInfo user={user} />
            <hr />
            <div className="user-profile-which-showing-header">
                <h5 onClick={() => setEvents('events')}>My Events</h5>
                <h5 onClick={() => setEvents('posts')}>My Posts</h5>
            </div>
            <hr />
            {events === 'events' ?
                <UsersEventsList>
                    {data.map(event =>
                        <Link to={`/events/${event.id}`}>
                            <div className="profile-event-container">
                                <div className="profile-event-pic-container">
                                    <img className="profile-event-pic" id={event.id} src={event.pic} />
                                </div>
                                <div className="profile-event-info-container">
                                    <h5>{event.title}</h5>
                                    <p>{startTime}, {readableDate}</p>
                                </div>
                            </div>
                        </Link>)}
                </UsersEventsList>
                :
                <UsersPosts userInfo={userInfo} user={user} />
            }
        </div>
    )
}

export default UserProfile
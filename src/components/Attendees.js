import React, {useEffect,useState} from "react"
import useFetch from '../hooks/useFetch'
import AttendButton from './AttendButton'
import Attendance from './Attendance'
import LoginForm from './LoginForm'
import {Redirect,Link} from 'react-router-dom'

const Attendees = ({handleClick,id,user,setUser}) => {

    const [userAttending,setUserAttending] = useState(false)
    
    return(
        <div className="attendees-container">
            <Attendance id={id}/>
            <div className="event-details-button-div">
                <Link to={`/EventFeed`}><button>Back to Events</button></Link>
                {user ? <AttendButton user={user} eventId={id}/> : <Link to='/LoginForm'><AttendButton user={user} eventId={id}/></Link>}
            </div>
        </div>
    )
}

export default Attendees
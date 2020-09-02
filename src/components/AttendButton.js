import React, {useEffect,useState} from "react"
import useFetch from '../hooks/useFetch'

function AttendButton({eventId,user}){
    const [loading,error,data,fetchData,setUrl] = useFetch(`/addAttendee/${eventId}`)
    
    const addAttend = () => {
        fetchData()
        setUserAttending(true)
        console.log(eventId,data)
    }

    const [userAttending,setUserAttending] = useState(data)

    return (
        <button id='attend-button' onClick={addAttend}>{userAttending ? <span className="green">Attending</span> : 'Attend & Support'}</button>
    )
}

export default AttendButton
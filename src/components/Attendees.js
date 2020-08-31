import React, {useEffect,useState} from "react"
import useFetch from '../hooks/useFetch'
import AttendButton from './AttendButton'
import LoginForm from './LoginForm'

const Attendees = ({handleClick,id,user,setUser}) => {

    //need to pull attendee count and display it AND send a fetch to the addattendee "app.post" method
    //so consider putting the attend button in its own component to run the query that adds a row to attendees table in schema
    const [loading,error,data,fetchData,setUrl] = useFetch(`/attendees/${id}`)
  
    useEffect(()=>{
        if(!data){
            fetchData()
            console.log(id)
        }
    },[])

    

    const [attendance,setAttendance] = useState(data)//change the zero to whatever the count(*) of this event is in the DB
    const [userAttending,setUserAttending] = useState(false)  
    
    

    const addAttend = (evt) => {
        ////// NEXT STEPS TO GET ADDATTENDEE WORKING: 
        //move button into its own component
        //add an onclick function that fetches the db query that adds a row to the attendees table
        //      with the user_id and the event_id        
        
        
        //another function adds the event to the user's homescreen -- after the event, the followup action is added to the user's homescreen as well
    }

    if(!data) return <div>loading...</div>
//{data[0].count >= 50 ? data[0].count : "<50"} <------ put in place of {data[0].count} three lines down
    return(
        <div>
            <h2>Attendance: {data[0].count}</h2>
            <div className="event-details-button-div">
                <button onClick={handleClick}>Back to Events</button>
                <AttendButton eventId={id}/>
            </div>
        </div>
    )
}

export default Attendees